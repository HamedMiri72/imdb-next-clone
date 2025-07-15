'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, parameter }) {

    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
        <Link href={`/?genre=${parameter}`}
        className={`hover:text-amber-600 font-semibold
        ${genre === parameter ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg': ""}`}>
            {title}
        </Link>
    </div>
  )
}
