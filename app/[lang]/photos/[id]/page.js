

import PhotoDetails from '@/components/PhotoDetails'
// import React from 'react'

export default function photoDetailsPage({params:{id,lang}}) {
    
  return (
    <PhotoDetails lang={lang} id={id} />
  )
}
