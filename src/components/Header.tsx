import logoSrc from '/money-bag.png'

export default function Header() {
  return (
    <header className="flex items-center gap-4 p-5 flex-col">
      <img src={logoSrc} alt="logo" />
      <h1 className="text-3xl font-semibold">Investment Calculator</h1>
    </header>
  )
}
