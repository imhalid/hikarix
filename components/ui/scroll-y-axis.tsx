'use client'
export default  function ScrollYAxis({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  function handleWheel(event: any) {
    const container = event.currentTarget
    const containerScrollPosition = container.scrollLeft

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: 'smooth', // Opsiyonel olarak yumuşak bir kaydırma efekti ekleyebilirsiniz
    })
  }

  return (
    <div className="mt-10 h-full">
      <div className="inline-flex flex-nowrap overflow-x-auto space-x-3 h-full scrollbar-hidden" onWheel={handleWheel}>
        {children}
      </div>
    </div>
  )
}
