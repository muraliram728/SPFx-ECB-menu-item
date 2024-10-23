// handleSubmit.ts
import { Log } from '@microsoft/sp-core-library';
import { sp } from '@pnp/sp/presets/all';
import { IDropdownOption } from '@fluentui/react';

const LOG_SOURCE: string = 'handleSubmit';

export const handleSubmit = async (inputValue: string, selectedOption: IDropdownOption | undefined, listId: string) => {
  try {
    const sanitizedInputValue = sanitizeInput(inputValue);
    const sanitizedOption = selectedOption ? sanitizeInput(selectedOption.key as string) : undefined;

    const newItem = {
      Title: sanitizedInputValue,
      ChoiceColumn: sanitizedOption,
    };

    if (!listId) {
      throw new Error('List ID is not defined.');
    }

    console.log('Item to be added:', newItem); // Log item before sending

    const addedItem = await sp.web.lists.getById(listId).items.add(newItem);
    console.log('Item created successfully:', addedItem);
  } catch (error) {
    Log.error(LOG_SOURCE, new Error(`Error creating item: ${error.message}`));
    alert(`An error occurred: ${error.message}`);
  }
};

const sanitizeInput = (input: string) => {
  return input.replace(/[<>&]/g, ''); // Remove potentially dangerous characters
};
