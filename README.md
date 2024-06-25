# Tab Manager Extension
#### Video Demo:  <URL HERE>
#### Description:

The Tab Manager Extension is a powerful Chrome extension designed to help users manage their browser tabs efficiently. With this extension, users can view a list of all open tabs, switch between tabs, close unwanted tabs, and keep track of the current date and time. This tool is perfect for users who often have multiple tabs open and need a way to organize their browsing sessions better.

 Features

 Tab Management

 -View All Tabs: The extension lists all currently open tabs with their titles, making it easy to see which tabs are open.
 -Switch Tabs: Users can switch to any tab by clicking the "Switch" button next to the tab title.
 -Close Tabs: Users can close any tab by clicking the "Close" button next to the tab title.
 -Refresh Tab List: The "Refresh Tabs" button allows users to refresh the list of open tabs, ensuring that the display is always up to date.

 Date and Time Display

-Current Date**: The extension displays the current date at the top of the popup.
-Current Time**: The extension displays the current time, which updates every second.

 Installation

To install the Tab Manager Extension, follow these steps:

1.Download the Extension**: Clone or download the project files from the GitHub repository.
2.Load the Extension**:
   -Open Chrome and go to `chrome://extensions/`.
   -Enable "Developer mode" using the toggle in the top right corner.
   -Click "Load unpacked" and select the project directory.

 Usage

1.Click on the Tab Manager Extension icon in the Chrome toolbar.
2.The popup will display the current date and time at the top.
3.Below the date and time, you will see a "Refresh Tabs" button and a list of all open tabs.
4.Use the "Switch" button to switch to a specific tab.
5.Use the "Close" button to close a specific tab.
6.Click the "Refresh Tabs" button to update the list of open tabs.

 Development

 Project Structure

-manifest.json: Defines the extension's properties and permissions.
-popup.html: The HTML file for the extension's popup interface.
-styles.css: The CSS file for styling the popup interface.
-popup.js: The JavaScript file for handling tab management and updating the date and time.
-icons: A directory containing the extension's icons.

 Key Files

 manifest.json

This file defines the extension's name, version, description, permissions, and action. It tells Chrome what resources the extension needs and what files to load.

 popup.html

This file defines the HTML structure of the popup interface. It includes elements for the date and time display, the "Refresh Tabs" button, and the container for the list of tabs.

 styles.css

This file contains CSS styles to make the popup interface look clean and organized. It styles the date and time display, the tab list, and the buttons.

 popup.js

This file contains JavaScript code to manage the extension's functionality. It handles fetching the list of open tabs, switching between tabs, closing tabs, and updating the date and time display.

 Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

1.Fork the repository.
2.Create a new branch (`git checkout -b feature-branch`).
3.Make your changes and commit them (`git commit -m 'Add new feature'`).
4.Push to the branch (`git push origin feature-branch`).
5.Open a pull request.

 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

 Acknowledgements

-Icons made by [Icon Author] from [icon source].
-Date and time functionality inspired by various JavaScript tutorials.
-Tab management functionality based on Chrome Extension API documentation.

 Conclusion

The Tab Manager Extension is a practical tool for anyone who frequently works with multiple tabs in Chrome. It helps users stay organized, reduces clutter, and provides a quick way to switch between and close tabs. The addition of the date and time display adds extra utility, making it a handy extension for productivity and time management. Download and install the Tab Manager Extension today to streamline your browsing experience!
