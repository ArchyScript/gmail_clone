//

// Create an array of objecta with all possible color combination
const allColorCombinationsArrayOfObjects = [ 
  { colorPropertyName: "--very_light_color", defaultColor: "#eee", darkModeColor: "#111" },
  { colorPropertyName: "--semi_light_color", defaultColor: "#bbb", darkModeColor: "#555" },
  { colorPropertyName: "--semi_dark_color", defaultColor: "#555", darkModeColor: "#bbb" },
  { colorPropertyName: "--very_dark_color", defaultColor: "#111", darkModeColor: "#eee" },
  { colorPropertyName: "--red_color", defaultColor: "darkred", darkModeColor: "red" },
  { colorPropertyName: "--blue_color", defaultColor: "darkblue", darkModeColor: "lightblue" },
  { colorPropertyName: "--yellow_color", defaultColor: "gold", darkModeColor: "yellow" },
  { colorPropertyName: "--green_color", defaultColor: "darkgreen", darkModeColor: "lightgreen" }
]
// Create an array of objects of all mail
const allReceivedMailsArrayOfObjects = [
  { mailSenderName: "Citonhub Developers", mailLabel: "inbox", mailReceivedTime: "09 : 32 AM", mailCategory: "social", mailSubject: "Citonhub Developers Team", mailContent: "We're working on implementing a payment method"},                                                                                 //
  { mailSenderName: "DSC OAU", mailLabel: "draft", mailReceivedTime: "02 : 24 PM", mailCategory: "primary", mailSubject: "Developers Student Club OAU", mailContent: "We're working on implementing a payment method"},
  { mailSenderName: "Youtube", mailLabel: "draft", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "draft", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "outdoor", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "trash", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "sent", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "sent", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "outdoor", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "outdoor", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "sent", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "spam", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "trash", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "spam", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "trash", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "snoozed", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "draft", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Trust Wallet", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "OAU", mailLabel: "secured", mailReceivedTime: "02 : 24 PM", mailCategory: "primary", mailSubject: "Obafemi Awolowo University", mailContent: "Congratulations on activating your student email, lectures starts "},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "inbox", mailReceivedTime: "Jan 07", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "DSC", mailLabel: "important", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "FreeCodeCamp", mailLabel: "secured", mailReceivedTime: "April 08", mailCategory: "promotion", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "favourite", mailReceivedTime: "12 : 32 AM", mailCategory: "primary", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"},
  { mailSenderName: "Youtube", mailLabel: "bookmarked", mailReceivedTime: "02 : 24 PM", mailCategory: "social", mailSubject: "Youtube Management Team", mailContent: "Welcome onboard, Congratulations on creating your channel"}
]
//
const linksClickEventArrayOfObjects = [
  { clickedLinkId: "inbox_label_link", clickedLinkName: "inbox", clickedLinkSection: "label" },
  { clickedLinkId: "sent_label_link", clickedLinkName: "sent", clickedLinkSection: "label" },
  { clickedLinkId: "snoozed_label_link", clickedLinkName: "snoozed", clickedLinkSection: "label" },
  { clickedLinkId: "draft_label_link", clickedLinkName: "draft", clickedLinkSection: "label" },
  { clickedLinkId: "important_label_link", clickedLinkName: "important", clickedLinkSection: "label" },
  { clickedLinkId: "outdoor_label_link", clickedLinkName: "outdoor", clickedLinkSection: "label" },
  { clickedLinkId: "favourite_label_link", clickedLinkName: "favourite", clickedLinkSection: "label" },
  { clickedLinkId: "bookmarked_label_link", clickedLinkName: "bookmarked", clickedLinkSection: "label" },
  { clickedLinkId: "spam_label_link", clickedLinkName: "spam", clickedLinkSection: "label" },
  { clickedLinkId: "secured_label_link", clickedLinkName: "secured", clickedLinkSection: "label" },
  { clickedLinkId: "trash_label_link", clickedLinkName: "trash", clickedLinkSection: "label" },
    
  { clickedLinkId: "primary_category_link_tab", clickedLinkName: "primary", clickedLinkSection: "category" },
  { clickedLinkId: "social_category_link_tab", clickedLinkName: "social", clickedLinkSection: "category" },
  { clickedLinkId: "promotion_category_link_tab", clickedLinkName: "promotion", clickedLinkSection: "category" }
]

// DOM Elements 
// Elements with ID
const receivedMailContainer = document.getElementById("received_mail_container")               
const allReceivedMailLabel = document.getElementById("all_received_mail_label")    
// Query selector node list
const allMailCategoryTabs = document.querySelectorAll(".mail_category_tab")
const allMailLabelLinks = document.querySelectorAll(".mail_label_link")
// Dark mode check box 
const darkModeSwitch = document.getElementById("dark_mode_switch")               
// Get all CSS root properties
const rootProperties = document.documentElement;


// Functions
// Reusable functions
function displayInnerHtmlFunction (eventId, eventValue) {
  document.getElementById(eventId).innerHTML = eventValue
}

// A function to remove all active class from all nav or tab links
function removeActiveClassFromAllLinksFunction () { 
  // Loop through all mail category link tab and 
  allMailCategoryTabs.forEach(eachMailCategoryTab => {
    // remove all active class from each mail category link tab
    eachMailCategoryTab.classList.remove("active")
  })
  // Loop through all mail label link and 
  allMailLabelLinks.forEach(eachMailLabelLink => {
    // remove all active class from each mail label link
    eachMailLabelLink.classList.remove("active")
  })
}

// An Immediately Invoked function to listen to click event from each tab link  => IIFE
(function toggleTabLinksOnclick () {
  allMailCategoryTabs.forEach (eachMailCategoryTab => {
    eachMailCategoryTab.onclick = () => {
      linksClickEventArrayOfObjects.forEach (eachClickedLink => {
        let eachClickedLinkId = eachClickedLink.clickedLinkId
        let eachClickedLinkName = eachClickedLink.clickedLinkName
        let eachClickedLinkSection = eachClickedLink.clickedLinkSection
    
        if (eachClickedLinkSection == "category" && eachMailCategoryTab.id == eachClickedLinkId) filterMailByCategoryFunction(eachClickedLinkName)
      })
    }
  })
  
  allMailLabelLinks.forEach (eachMailLabelLink => {
    eachMailLabelLink.onclick = () => {
      linksClickEventArrayOfObjects.forEach (eachClickedLink => {
        let eachClickedLinkId = eachClickedLink.clickedLinkId
        let eachClickedLinkName = eachClickedLink.clickedLinkName
        let eachClickedLinkSection = eachClickedLink.clickedLinkSection
    
        if (eachClickedLinkSection == "label" && eachMailLabelLink.id == eachClickedLinkId) filterMailByLabelFunction(eachClickedLinkName)
      })
    }
  })
})();

// A function to calculate and display number of mails according to their label
function calculateAndDisplayNumberOfMailsFunction () {
  // create a variable to hold all label numbers
  let totalMailNumber = 0
  let totalInboxNumber = 0
  let totalSentNumber = 0
  let totalOutdoorNumber = 0
  let totalSnoozedNumber = 0
  let totalFavouriteNumber = 0
  let totalBookmarkedNumber = 0
  let totalTrashNumber = 0
  let totalSpamNumber = 0
  let totalImportantNumber = 0
  let totalDraftNumber = 0
  let totalSecuredNumber = 0
  
  allReceivedMailsArrayOfObjects.forEach (eachReceivedMail => {
    let eachReceivedMailLabel = eachReceivedMail.mailLabel
    
    // Count all received mails available
    totalMailNumber += 1
    // Filter and count all mail labels and assign the value to its respective variable
    if (eachReceivedMailLabel == "sent") totalSentNumber += 1
    if (eachReceivedMailLabel == "outdoor") totalOutdoorNumber += 1
    if (eachReceivedMailLabel == "important") totalImportantNumber += 1
    if (eachReceivedMailLabel == "spam") totalSpamNumber += 1
    if (eachReceivedMailLabel == "trash") totalTrashNumber += 1
    if (eachReceivedMailLabel == "draft") totalDraftNumber += 1
    if (eachReceivedMailLabel == "secured") totalSecuredNumber += 1
    if (eachReceivedMailLabel == "snoozed") totalSnoozedNumber += 1
    if (eachReceivedMailLabel == "bookmarked") totalBookmarkedNumber += 1
    if (eachReceivedMailLabel == "inbox") totalInboxNumber += 1
    if (eachReceivedMailLabel == "favourite") totalFavouriteNumber += 1 
  })
  
  // Display all mail label number in their respective HTML element
  displayInnerHtmlFunction("total_mail_number_1", totalMailNumber)
  displayInnerHtmlFunction("total_mail_number_2", totalMailNumber)
  displayInnerHtmlFunction("total_inbox_number", totalInboxNumber)
  displayInnerHtmlFunction("total_sent_number", totalSentNumber)
  displayInnerHtmlFunction("total_outdoor_number", totalOutdoorNumber)
  displayInnerHtmlFunction("total_favourite_number", totalFavouriteNumber)
  displayInnerHtmlFunction("total_bookmarked_number", totalBookmarkedNumber)
  displayInnerHtmlFunction("total_important_number", totalImportantNumber)
  displayInnerHtmlFunction("total_draft_number", totalDraftNumber)
  displayInnerHtmlFunction("total_snoozed_number", totalSnoozedNumber)
  displayInnerHtmlFunction("total_spamed_number", totalSpamNumber)
  displayInnerHtmlFunction("total_trashed_number", totalTrashNumber)
  displayInnerHtmlFunction("total_secured_number", totalSecuredNumber)
}

// Create a function to toggle between dark and normal mode mode
function checkDefaultOrDarkModeFunction () {
  allColorCombinationsArrayOfObjects.forEach(eachColorCombination => {
    let colorPropertyName = eachColorCombination.colorPropertyName
    let defaultColor = eachColorCombination.defaultColor
    let darkModeColor = eachColorCombination.darkModeColor
    
    // Set dark mode colors if dark mode is "ON" and default mode color if dark mode is "OFF"
    darkModeSwitch.checked ? rootProperties.style.setProperty(colorPropertyName, darkModeColor) : rootProperties.style.setProperty(colorPropertyName, defaultColor)              //
  })
}

// A function to display all received mail
function displayReceivedMailsFunction () {
  // Remove all navigation links active class
  removeActiveClassFromAllLinksFunction()
  // Empty all HTML element in the received mail container 
  receivedMailContainer.innerHTML = ""
  // Add an active class to the clicked navigation link
  allReceivedMailLabel.classList.add("active")
  
  // Loop through allReceivedMailsArrayOfObjects and perform some task
  allReceivedMailsArrayOfObjects.forEach (eachReceivedMail => {
    let eachReceivedMailSenderName = eachReceivedMail.mailSenderName
    let eachReceivedMailSubject = eachReceivedMail.mailSubject
    let eachReceivedMailContent = eachReceivedMail.mailContent
    let eachReceivedMailLabel = eachReceivedMail.mailLabel
    let eachReceivedMailCategory = eachReceivedMail.mailCategory
    let eachReceivedMailTime = eachReceivedMail.mailReceivedTime
    
    // Assign each received mail to a variable
    let displayReceivedMailLayout = `
      <div class="row py-2 m_f_w v_d_t_c g_b_b"> 
        <span class="col-4 pr-2 d-flex align-items-center"> 
          <input type="checkbox" class="mx-2 received_mail_checkbox"> 
          <i class="fa fa-star mx-2 v_l_t_c favourite checked_${eachReceivedMailLabel}"  style="-webkit-text-stroke: 1px var(--very_dark_color);"> </i>
          <i class="fa fa-bookmark mx-2 v_l_t_c bookmarked checked_${eachReceivedMailLabel}"  style="-webkit-text-stroke: 1px var(--very_dark_color);"> </i> 
          <span class="mx-2 d-inline-block text-truncate" style="max-width: 150px;"> ${eachReceivedMailSenderName} </span>
        </span> 
        <span class="col-6 px-1 text-truncate d-flex align-items-center">
          <span class="pr-1"> ${eachReceivedMailSubject} </span>
          <span class="pl-1 s_f_w m_f_s"> - ${eachReceivedMailContent} </span>
        </span>
        <span class="col-2 pl-2 d-flex justify-content-center align-items-center m_f_s m_f_w"> ${eachReceivedMailTime} </span>
      </div> `
    
    // Append every received mail to the end of each previous mail
    receivedMailContainer.innerHTML += displayReceivedMailLayout
  })
}

// A function to filter received mail by category 
function filterMailByCategoryFunction (mailCategory) {
  // Remove all navigation links active class
  removeActiveClassFromAllLinksFunction()
  // Empty all HTML element in the received mail container 
  receivedMailContainer.innerHTML = ""
  // Add an active class to the clicked mail category link tab
  document.getElementById(`${mailCategory}_category_link_tab`).classList.add("active")
  
  // Loop through allReceivedMailsArrayOfObjects and perform some task
  allReceivedMailsArrayOfObjects.forEach (eachReceivedMail => {
    let eachReceivedMailSenderName = eachReceivedMail.mailSenderName
    let eachReceivedMailSubject = eachReceivedMail.mailSubject
    let eachReceivedMailContent = eachReceivedMail.mailContent
    let eachReceivedMailLabel = eachReceivedMail.mailLabel
    let eachReceivedMailCategory = eachReceivedMail.mailCategory
    let eachReceivedMailTime = eachReceivedMail.mailReceivedTime
    
    // Assign each received mail to a variable
    let displayReceivedMailFormat = `
      <div class="row py-2 m_f_w v_d_t_c g_b_b"> 
        <span class="col-4 pr-2 d-flex align-items-center"> 
          <input type="checkbox" class="mx-2 received_mail_checkbox"> 
          <i class="fa fa-star mx-2 v_l_t_c favourite checked_${eachReceivedMailLabel}"  style="-webkit-text-stroke: 1px var(--very_dark_color);"> </i>
          <i class="fa fa-bookmark mx-2 v_l_t_c bookmarked checked_${eachReceivedMailLabel}"  style="-webkit-text-stroke: 1px var(--very_dark_color);"> </i> 
          <span class="mx-2 d-inline-block text-truncate" style="max-width: 150px;"> ${eachReceivedMailSenderName} </span>
        </span> 
        <span class="col-5 px-1 text-truncate d-flex align-items-center">
          <span class="pr-1"> ${eachReceivedMailSubject} </span>
          <span class="pl-1 s_f_w m_f_s"> - ${eachReceivedMailContent} </span>
        </span>
        <span class="col-2 pl-2 d-flex justify-content-center align-items-center m_f_s m_f_w"> ${eachReceivedMailTime} </span>
      </div> `
    
    // Display received mail depending on the clicked category link tab 
    if (mailCategory == eachReceivedMailCategory) receivedMailContainer.innerHTML += displayReceivedMailFormat
  })
}

// A function to filter received mail by label  
function filterMailByLabelFunction (mailLabel) {
  // Remove all navigation links active class
  removeActiveClassFromAllLinksFunction()
  // Empty all HTML element in the received mail container 
  receivedMailContainer.innerHTML = ""
  // Add an active class to the clicked mail label link
  document.getElementById(`${mailLabel}_label_link`).classList.add("active")
  // event.target.classList.add("active")

  // Loop through allReceivedMailsArrayOfObjects and perform some task
  allReceivedMailsArrayOfObjects.forEach (eachReceivedMail => {
    let eachReceivedMailSenderName = eachReceivedMail.mailSenderName
    let eachReceivedMailSubject = eachReceivedMail.mailSubject
    let eachReceivedMailContent = eachReceivedMail.mailContent
    let eachReceivedMailLabel = eachReceivedMail.mailLabel
    let eachReceivedMailCategory = eachReceivedMail.mailCategory
    let eachReceivedMailTime = eachReceivedMail.mailReceivedTime
    
    // Assign each received mail to a variable
    let displayReceivedMailFormat = `
      <div class="row py-2 m_f_w v_d_t_c g_b_b"> 
        <span class="col-4 pr-2 d-flex align-items-center"> 
          <input type="checkbox" class="mx-2 received_mail_checkbox"> 
          <i class="fa fa-star mx-2 v_l_t_c favourite checked_${eachReceivedMailLabel}"  style="-webkit-text-stroke: 1px var(--very_dark_color);"> </i>
          <i class="fa fa-bookmark mx-2 v_l_t_c bookmarked checked_${eachReceivedMailLabel}"  style="-webkit-text-stroke: 1px var(--very_dark_color);"> </i> 
          <span class="mx-2 d-inline-block text-truncate" style="max-width: 150px;"> ${eachReceivedMailSenderName} </span>
        </span> 
        <span class="col-6 px-1 text-truncate d-flex align-items-center">
          <span class="pr-1"> ${eachReceivedMailSubject} </span>
          <span class="pl-1 s_f_w m_f_s"> - ${eachReceivedMailContent} </span>
        </span>
        <span class="col-2 pl-2 d-flex justify-content-center align-items-center m_f_s m_f_w"> ${eachReceivedMailTime} </span>
      </div> `
    
    // Display received mail depending on the clicked label link 
    if (mailLabel == eachReceivedMailLabel) receivedMailContainer.innerHTML += displayReceivedMailFormat
  })
}


// Onclick Events
// Display all received mail without filter onclick on allReceivedMailLabel
allReceivedMailLabel.onclick = () => displayReceivedMailsFunction()
// Toggle between dark and default mode on click on darkModeSwitch
darkModeSwitch.onclick = () => checkDefaultOrDarkModeFunction()


// Onload Events
// Perform some function onload
document.querySelector("body").onload = () => {
  // Check dark mode when page loads
  checkDefaultOrDarkModeFunction()
  // Display all received mail without filter 
  displayReceivedMailsFunction()
  // Calculate and display all numbers of mails respectively
  calculateAndDisplayNumberOfMailsFunction()
}






//  Welldone Daniel