import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const VideoSection = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Assista o ultimo vídeo registrado</CardTitle>
        <CardDescription>29 de maio de 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <iframe width="100%" height="411" src="https://www.youtube.com/embed/9tjrb3D8b1A" title="Resolvendo desafio da Meta" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
      </CardContent>
    </Card>
  )
}

export default VideoSection