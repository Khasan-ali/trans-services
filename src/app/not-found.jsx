'use client';

import cls from './notfound.module.css'

export default function NotFound() {
       return <html>
                     <body suppressHydrationWarning={true} className={cls.not_found_body}>
                            <h1 className={cls.not_found_heading}>Someting went wrong!</h1>
                     </body>
              </html>       
}
