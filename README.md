# SPFx Custom Action with ECB Menu

This project demonstrates how to create a SharePoint Framework (SPFx) extension that adds a custom ECB (Edit Control Block) menu item. When the user clicks the custom menu item, a form is displayed, allowing the user to input text and select an option from a choice column. The form's data is then submitted and stored in a SharePoint list.

## Features

- **Custom ECB Menu Action**: Adds a new item to the SharePoint list ECB menu.
- **Form with Input Field**: A textbox that allows users to type content, which is then stored in a SharePoint list.
- **Choice Field**: A dropdown with options (`Option 1`, `Option 2`, and `Option 3`) that users can select and submit.
- **Integration with SharePoint List**: The form data (text input and selected choice) is saved directly to a specified SharePoint list.
- **Dialog-Based Form**: A React-based dialog is rendered when the ECB menu action is clicked.

## Technology Stack

- **SharePoint Framework (SPFx)**: Used for creating the custom extension.
- **React**: The form is built using React components.
- **PnP JS**: Handles communication with SharePoint lists for item creation.
- **Fluent UI**: Utilized for building the form controls (textbox, dropdown).
  
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/SPFx-Portfolio.git
   cd SPFx-Portfolio

2.npm install

3.gulp build

4.gulp bundle --ship

5.gulp package-solution --ship

6.Deploy the solution package to your SharePoint tenant's App Catalog.


How It Works...

1. Custom ECB Menu Action: Once the solution is deployed, a custom menu action appears in the list view context menu (ECB menu).

2.Form Interaction: Clicking on the custom action opens a dialog containing:
          1.A textbox for text input.
          2.A dropdown with three options.
          
3.Data Submission: When the form is submitted, the text and selected option are stored in a SharePoint list.
Screenshot

Screenshot
![img1](https://github.com/user-attachments/assets/6cab8c7e-9189-44ca-ac16-8f0e8cbf4660)
![img2](https://github.com/user-attachments/assets/0ddc5fba-bc34-4cba-bb5f-f12ef15ccdbf)
![img3](https://github.com/user-attachments/assets/a6b42961-4227-46eb-a45c-d1c939749f12)
