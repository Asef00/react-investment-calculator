type Props = {
  id: string
  label: string
  placeholder: string
  required?: boolean
  initialValue?: number
  onUpdate: (value: string) => void
}

export default function Input({
  id,
  label,
  placeholder,
  required,
  initialValue,
  onUpdate,
}: Props) {
  return (
    <div>
      <label>
        {label}
        <input
          className="w-full rounded-sm text-black py-1 px-2"
          value={initialValue}
          id={id}
          type="number"
          placeholder={placeholder}
          onChange={(e) => onUpdate(e.target.value)}
          required={required}
        />
      </label>
    </div>
  )
}
