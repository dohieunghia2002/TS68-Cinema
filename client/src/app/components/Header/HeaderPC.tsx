'use client'

import React from 'react'
import logo from '../../assets/images/Logonetflix.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ModeToggle } from '../mode-toggle'
import { RegisterForm } from '../RegisterForm'
import { LoginForm } from '../LoginForm'


export default function HeaderPC() {
    const pathname = usePathname();

    return (
        <div className='container mx-auto px-24 h-20 flex items-center justify-between shadow-lg border-b border-b-gray-300'>
            <div className="logo-wrapper w-[10%]">
                <img src={logo.src} alt="logo" />
            </div>
            <ul className='categories-wrapper flex w-[30%] flex-1'>
                <li className='ml-8'>
                    <Link href="/" className={clsx('px-3 py-1 rounded-[5px]', pathname === '/' ? 'btn-menu-active' : 'btn-menu-hover')}>
                        HOME
                    </Link>
                </li>
                <li className='ml-8'>
                    <Link href="/movies" className={clsx('px-3 py-1 rounded-[5px]', pathname === '/movies' ? 'btn-menu-active' : 'btn-menu-hover')}>
                        MOVIES
                    </Link>
                </li>
                <li className='ml-8'>
                    <Link href="/series" className={clsx('px-3 py-1 rounded-[5px]', pathname === '/series' ? 'btn-menu-active' : 'btn-menu-hover')}>
                        TV-SERIES
                    </Link>
                </li>
            </ul>
            <ul className='auth-wrapper flex w-[40%] flex-initial justify-end items-center'>
                <li>
                    <ModeToggle />
                </li>
                <li className='ml-4'>
                    <LoginForm />
                </li>
                <li className='ml-4'>
                    <RegisterForm />
                </li>
            </ul>
        </div>
    )
}
