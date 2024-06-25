const Header = () => {
  return (
    <div className="flex justify-between px-8 w-screen h-16 items-center border-b-2 fixed top-0 left-0 right-0 z-20 bg-white">
      <h1 className="font-bold text-2xl">Task Tracker</h1>
      <div className="flex gap-3">{/* ページを追加する場合は、以下に遷移先のページへのリンクを追加 */}</div>
    </div>
  )
}

export default Header
