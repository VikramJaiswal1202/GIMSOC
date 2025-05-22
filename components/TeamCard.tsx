import React from 'react'
import Image from 'next/image'

type TeamCardProps = {
  name: string
  position: string
  photo: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, photo }) => {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl shadow-2xl w-full h-[400px] overflow-hidden p-3 bg-white max-w-xs mx-auto">
      <div className="w-full h-80 relative mb-3">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col justify-center min-h-[60px] px-2">
        <h3 className="text-base sm:text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
  )
}

export default TeamCard
