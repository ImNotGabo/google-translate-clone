import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  value: string
  loading?: boolean
  onChange: (value: string) => void
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }
const getPlaceholder = ({ type, loading }: Pick<Props, 'type' | 'loading'>) => {
  if (loading) return 'Translating...'
  return type === SectionType.From ? 'Enter text' : 'Translation'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      value={value}
      onChange={handleChange}
      style={styles}
    />
  )
}

