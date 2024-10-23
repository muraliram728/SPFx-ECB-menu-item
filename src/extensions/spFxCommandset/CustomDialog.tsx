// CustomDialog.tsx
import * as React from 'react';
import { Dialog, TextField, Dropdown, IDropdownOption } from '@fluentui/react';
// import { sp } from '@pnp/sp/presets/all';
import './CustomDialog.css';

interface ICustomDialogProps {
  onDismiss: () => void;
  listId: string;
  handleSubmit: (inputValue: string, selectedOption: IDropdownOption | undefined) => Promise<void>;
}

const CustomDialog: React.FC<ICustomDialogProps> = ({ onDismiss, listId, handleSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState<IDropdownOption | undefined>(undefined);

  const sanitizeInput = (input: string) => {
    return input.replace(/[<>&]/g, ''); // Remove potentially dangerous characters
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(event.target.value);
    setInputValue(sanitizedValue);
  };

  const handleDropdownChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    setSelectedOption(option);
  };

  const onSubmit = async () => {
    await handleSubmit(inputValue, selectedOption);
    onDismiss(); // Dismiss the dialog after submission
  };

  // Define dropdown options
  const dropdownOptions: IDropdownOption[] = [
    { key: 'Option1', text: 'Option 1' },
    { key: 'Option2', text: 'Option 2' },
    { key: 'Option3', text: 'Option 3' },
  ];

  return (
    <Dialog hidden={false} onDismiss={onDismiss} maxWidth="auto" title="Hello, this is a sample dialog message.">
      <div className="custom-dialog"> 
        <TextField
          label="Enter your Value"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something here..."
        />
        <Dropdown
          label="Select an Option"
          options={dropdownOptions}
          selectedKey={selectedOption?.key}
          onChange={handleDropdownChange}
          placeholder="Choose an option"
          styles={{ dropdown: { marginTop: '10px' } }} 
        />
        <div style={{ marginTop: '10px' }}>
          <button className="submit-button" onClick={onSubmit}>Submit</button> {/* Apply custom button class */}
        </div>
        
      </div>
    </Dialog>
  );
}

export default CustomDialog;
