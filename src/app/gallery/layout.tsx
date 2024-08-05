const GalleryLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="h-full">
      { children }
    </main>
  )
}

export default GalleryLayout;

