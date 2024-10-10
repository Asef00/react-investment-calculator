type Props = {
  id: string
  label: string
  placeholder: string
  required?: boolean
  onUpdate: (value: string, name: string) => void
}

export default function Input({
  id,
  label,
  placeholder,
  required,
  onUpdate,
}: Props) {
  return (
    <div>
      <label>
        {label}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={(e) => onUpdate(e.target.value, id)}
          required={required}
        />
      </label>
    </div>
  )
}
