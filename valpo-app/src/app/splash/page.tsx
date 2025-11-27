"use client"
import { Icon } from "@/components/ui/icon";
import { useRouter } from "next/navigation";
import { useEffect, useState, } from "react";

export default function SplashPage(){


    const router = useRouter()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval)
              return 100
            }
            return prev + 2
          })
        }, 40)
    
        const timeout = setTimeout(() => {
          router.push("/")
        }, 2500)
    
        return () => {
          clearInterval(interval)
          clearTimeout(timeout)
        }
      }, [router])

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-primary-foreground">
          {/* Logo animado */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-32 rounded-full bg-white/10 animate-ping" />
            </div>
            <div className="relative flex items-center justify-center size-28 rounded-3xl bg-white/20 backdrop-blur-sm">
              <Icon name="elevator" size="xl" className="text-white !text-5xl" />
            </div>
          </div>
    
          {/* Título */}
          <h1 className="text-4xl font-bold mb-2 tracking-tight">ValpoApp</h1>
          <p className="text-white/80 text-lg mb-12">Descubre el Puerto</p>
    
          {/* Barra de progreso */}
          <div className="w-64 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-white/60 text-sm">Cargando...</p>
    
          {/* Versión */}
          <p className="absolute bottom-8 text-white/40 text-xs">Versión 1.0.0</p>
        </div>
      )
}