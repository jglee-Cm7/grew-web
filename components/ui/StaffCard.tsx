// StaffCard.tsx
import Image from 'next/image';
import React from 'react';

export interface StaffMember {
  id: string;
  name: string;
  affiliations: string[];
  imageSrc: string;
  badgeText: string;
}

const StaffCard: React.FC<{ member: StaffMember }> = ({ member }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <Image
          src={member.imageSrc}
          alt={`${member.name} profile`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-grow flex-col p-4">
        <div className="mb-2">
          <span className="inline-block rounded bg-green-500 px-2 py-1 text-xs font-semibold text-white">
            {member.badgeText}
          </span>
        </div>
        <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
        <div className="mt-auto space-y-1 text-sm text-gray-600">
          {member.affiliations.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffCard;