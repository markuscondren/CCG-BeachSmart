# CCG-BeachSmart
MSc Software Development - Dissertation project.

# Project Brief

Using interactive web-based mapping, develop a range of features to support the development of a BeachSmart campaign informing residents & visitors of environmental issues they should be aware of before using the renowned beaches & coast of the Causeway Coast and Glens.

### Initial techology stack (subject to alteration throughout course of project)
Web (HTML, CSS), Javascript, PHP, Database, RESTful API, Mapping API


# Requirements
MoSCoW Prioritisation.

#### Must have
o	Accessibility features for users with keyboard-only or visual/auditory impairments.
o	An interactive map with pins displaying the beaches that the council oversees.
o	Users must be able to explore the map, to include zooming and panning.
o	A link for each beach to the relevant CCG website page.
o	Environment, historical and practical (accessibility, closure times etc.) information for a beach that is selected. To include beach status such as flag and water category.

#### Should have
o	Local landmarks, businesses and sports facilities, highlighted with icons/pins – to include opening hours, contact details and links to external websites.
o	A map filter allowing users to decide what type of amenity or attraction type they wish to browse.
o	Live weather and tidal data allowing users to safely explore the area.
o	Bus and train routes around the area with timetables (better UX) or links to external Translink website.
o	Users should be able to create an account – allowing them to add map items to a watchlist, get notifications about events and save favourite routes – could sign up with email or Google account.

#### Could have
o	Users could pick a list of beaches, landmarks etc they wish to visit and give their available time, start and end point. An algorithm would be used to calculate their most efficient route. This is perhaps a more tourist-oriented requirement but could be of great use to locals too.
o	Users could report any rubbish, damaged property or anti-social behaviour to the council, perhaps uploading a photo from the app. This would be reported along with time, date and geolocation data, allowing the council to take quick and efficient action.
o	An API, likely built using PHP or NodeJS, allowing other developers to make use of the aggregated data used in the app.
o	Social media aggregators which display tweets or Facebook posts using pre-determined hashtags or the CCG social feeds, as per “plan your trip” page on the CCG website (https://www.visitcausewaycoastandglens.com/plan-your-trip/visitor-information/maps-and-guides).

#### Won't have (within the current project timeline)
o	Integration with Fitbit, Strava or similar, to save routes or walks and share progress with friends and family.
o	Social media integration allowing posts to be made direct from the web app.
o	Photos uploaded by viewers aggregated together and shown in the information section of each pin location as a slideshow with username and date below.
o	Augmented reality functionality, allowing users to preview the area and decide as to where they wish to visit.
