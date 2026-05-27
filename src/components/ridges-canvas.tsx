"use client";

import { useEffect, useRef } from "react";

const VS = `#version 300 es
precision highp float;
out vec2 v_uv;
void main() {
  vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0,
                (gl_VertexID == 2) ? 3.0 : -1.0);
  v_uv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`;

const FS = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_press;
uniform vec4 u_clicks[8];

vec2 hash22(vec2 p){ p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))); return fract(sin(p)*43758.5453)*2.0-1.0; }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(dot(hash22(i+vec2(0,0)), f-vec2(0,0)),
                 dot(hash22(i+vec2(1,0)), f-vec2(1,0)), u.x),
             mix(dot(hash22(i+vec2(0,1)), f-vec2(0,1)),
                 dot(hash22(i+vec2(1,1)), f-vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float s=0.0, a=0.55, f=1.0;
  for (int i=0;i<5;i++){ s += a*noise(p*f); f*=2.0; a*=0.5; }
  return s;
}

void main(){
  vec2 uv = v_uv;
  float aspect = u_res.x/u_res.y;
  vec2 p = (uv - 0.5); p.x *= aspect;
  vec2 m = (u_mouse - 0.5);

  vec2 q = p + m * 0.22;
  q += vec2(u_time*0.025, u_time*0.012);

  float h = fbm(q*1.4);

  for (int i=0;i<8;i++){
    vec4 c = u_clicks[i];
    if (c.w <= 0.0) continue;
    vec2 cp = (c.xy - 0.5); cp.x *= aspect;
    float d = length(p - cp);
    float age = c.z;
    float fade = exp(-age*0.85);
    h += 0.10 * sin(d*20.0 - age*7.5) * fade * smoothstep(1.1, 0.0, d);
  }

  float lines = abs(fract(h*7.0) - 0.5);
  float aa = fwidth(h*7.0)*1.2;
  float contour = 1.0 - smoothstep(aa*0.5, aa*1.5, lines);

  float major = abs(fract(h*1.8) - 0.5);
  float majAa = fwidth(h*1.8)*1.2;
  float majC = 1.0 - smoothstep(majAa*0.5, majAa*1.5, major);

  vec3 lo  = vec3(0.012, 0.018, 0.045);
  vec3 mid = vec3(0.035, 0.110, 0.190);
  vec3 hi  = vec3(0.12, 0.55, 0.70);
  float hN = h*0.5 + 0.5;
  vec3 col = mix(lo, mid, smoothstep(0.0, 0.6, hN));
  col = mix(col, hi, smoothstep(0.6, 1.0, hN));

  col += vec3(0.32, 0.85, 0.95) * contour * 0.22;
  col += vec3(0.78, 0.72, 1.00) * majC * 0.38;

  vec2 mLocal = m; mLocal.x *= aspect;
  float mGlow = exp(-length(p - mLocal)*2.6);
  col += vec3(0.40, 0.90, 1.00) * mGlow * (0.06 + 0.20*u_press);

  for (int i=0;i<8;i++){
    vec4 c = u_clicks[i];
    if (c.w <= 0.0) continue;
    vec2 cp = (c.xy - 0.5); cp.x *= aspect;
    float d = length(p - cp);
    float age = c.z;
    float flash = exp(-age*3.0) * exp(-d*4.0);
    col += vec3(0.6, 0.95, 1.0) * flash * 1.0;
  }

  float vig = smoothstep(1.35, 0.20, length((uv-0.5)*vec2(aspect,1.0)));
  col *= mix(0.30, 1.0, vig);

  float midBand = smoothstep(0.55, 0.0, abs(uv.y - 0.42));
  col *= mix(1.0, 0.78, midBand * 0.55);

  outColor = vec4(col, 1.0);
}`;

const MAX_CLICKS = 8;

export default function RidgesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", {
      antialias: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    }
    const vs = compile(gl.VERTEX_SHADER, VS);
    const fs = compile(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uPress = gl.getUniformLocation(prog, "u_press");
    const uClicks = gl.getUniformLocation(prog, "u_clicks[0]");

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    let mouseX = 0.5,
      mouseY = 0.5;
    let mouseSX = 0.5,
      mouseSY = 0.5;
    let pressed = 0,
      pressedS = 0;
    const clicks = new Float32Array(MAX_CLICKS * 4);
    let clickHead = 0;

    function spawnClick(uvx: number, uvy: number, strength = 1.0) {
      const i = clickHead;
      clicks[i * 4 + 0] = uvx;
      clicks[i * 4 + 1] = uvy;
      clicks[i * 4 + 2] = 0.0;
      clicks[i * 4 + 3] = strength;
      clickHead = (clickHead + 1) % MAX_CLICKS;
    }

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const w = rect.width,
        h = rect.height;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    window.addEventListener("resize", resize);

    function onMove(e: MouseEvent | TouchEvent) {
      const t = "touches" in e ? e.touches[0] : e;
      if (!t) return;
      mouseX = Math.min(1, Math.max(0, t.clientX / window.innerWidth));
      mouseY = Math.min(
        1,
        Math.max(0, 1.0 - t.clientY / window.innerHeight)
      );
    }
    function onDown(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement;
      if (target?.closest?.("a, button, input, textarea, [role=button]"))
        return;
      pressed = 1;
      onMove(e);
      spawnClick(mouseX, mouseY, 1.0);
    }
    function onUp() {
      pressed = 0;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp);

    spawnClick(0.5, 0.55, 0.6);

    let last = performance.now();
    let raf = 0;
    let running = true;
    function frame(now: number) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const k = 1 - Math.pow(0.001, dt);
      mouseSX += (mouseX - mouseSX) * k * 0.7;
      mouseSY += (mouseY - mouseSY) * k * 0.7;
      pressedS += (pressed - pressedS) * k * 0.9;

      for (let i = 0; i < MAX_CLICKS; i++) {
        const idx = i * 4;
        if (clicks[idx + 3] > 0.0) {
          clicks[idx + 2] += dt;
          if (clicks[idx + 2] > 4.5) clicks[idx + 3] = 0.0;
        }
      }

      gl!.useProgram(prog);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, now / 1000);
      gl!.uniform2f(uMouse, mouseSX, mouseSY);
      gl!.uniform1f(uPress, pressedS);
      gl!.uniform4fv(uClicks, clicks);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    function onVis() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={canvasRef} className="rph-neural" aria-hidden="true" />;
}
