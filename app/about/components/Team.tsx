import React from 'react'
import Image from "next/image";
import { Card } from '@/app/components/ui/card'; 
import { teamMembers } from '@/app/data/teamMembers';

const Team = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
         <Card key={member.name} className="group overflow-hidden !pt-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-slate-600">
            <div className="p-6">
              <div className="aspect-square relative w-full max-w-[300px] mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-teal-400 font-bold mb-4">{member.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
  )
}

export default Team
