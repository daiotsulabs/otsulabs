import { useEffect } from "react"

const Noise = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas')
    if (!canvas) return
	  const ctx = canvas.getContext('2d')
    canvas.width = canvas.height = 128

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    
    function noise(ctx: CanvasRenderingContext2D) {
        
      const w = ctx.canvas.width,
            h = ctx.canvas.height,
            iData = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(iData.data.buffer),
            len = buffer32.length
        let i = 0
    
      for(; i < len;i++)
        
        if (Math.random() < 0.2) buffer32[i] = 0xffffffff;
    
        ctx.putImageData(iData, 0, 0);
    }

    resize();
    window.onresize = resize;

    (function loop() {
      if (!ctx) return
      noise(ctx);
      requestAnimationFrame(loop);
    })();
  }, [])

  return (
    <canvas className="absolute opacity-10 z-[1] pointer-events-none select-none"></canvas>
  )
}

export {
  Noise
}