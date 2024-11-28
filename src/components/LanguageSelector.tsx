import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
  | {
      type: SectionType.From
      value: FromLanguage
      disabledOption?: Language
      onChange: (language: FromLanguage) => void
    }
  | {
      type: SectionType.To
      value: Language
      disabledOption?: FromLanguage
      onChange: (language: Language) => void
    }

export const LanguageSelector: React.FC<Props> = ({
  onChange,
  type,
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select
      value={value}
      aria-label='Choose a language'
      onChange={handleChange}
      style={{ width: '200px' }}
    >
      {type === SectionType.From && (
        <option value='auto'>Detect language</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}

