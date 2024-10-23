// SpFxCommandsetCommandSet.ts
import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetExecuteEventParameters,
  ListViewStateChangedEventArgs
} from '@microsoft/sp-listview-extensibility';
import CustomDialog from './CustomDialog';
import { handleSubmit } from './handleSubmit';

export interface ISpFxCommandsetCommandSetProperties {
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'SpFxCommandsetCommandSet';

export default class SpFxCommandsetCommandSet extends BaseListViewCommandSet<ISpFxCommandsetCommandSetProperties> {

  private domElement: HTMLElement;

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized SpFxCommandsetCommandSet');

    this.domElement = document.createElement('div');
    this.domElement.id = 'ContractExtensionsCommandSetRoot';
    document.body.appendChild(this.domElement);

    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    if (compareOneCommand) {
      compareOneCommand.visible = false; // Hide the command initially
    }

    this.context.listView.listViewStateChangedEvent.add(this, this._onListViewStateChanged);

    return Promise.resolve();
  }

  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
        // Handle COMMAND_1 logic here
        break;

      case 'COMMAND_2':
        const listId = '6f443ee2-7dfa-499b-8055-09fe2f475b1f';
        ReactDOM.render(
          <CustomDialog
            onDismiss={() => {
              ReactDOM.unmountComponentAtNode(this.domElement);
              console.log('Dialog component removed');
            }}
            listId={listId}
            handleSubmit={async (inputValue, selectedOption) => {
              await handleSubmit(inputValue, selectedOption, listId);
            }}
          />,
          this.domElement
        );
        break;

      default:
        throw new Error('Unknown command');
    }
  }

  private _onListViewStateChanged = (args: ListViewStateChangedEventArgs): void => {
    Log.info(LOG_SOURCE, 'List view state changed');

    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    if (compareOneCommand) {
      compareOneCommand.visible = this.context.listView.selectedRows?.length === 1;
    }

    this.raiseOnChange();
  }
}
