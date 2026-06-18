import './globals.css'

export const metadata = {
  title: 'Omar Faruk Jamil | Full Stack Developer',
  description: 'Full Stack Developer specializing in Laravel, React, Next.js, and AI-driven development. Based in Dhaka, Bangladesh.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0F172A] text-slate-200 min-h-screen">
        {children}
      </body>
    </html>
  )
}
