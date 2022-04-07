import React, {Component} from 'react';
import '../../../src/App.css'
import "survey-react/survey.css"
import * as Survey from "survey-react"

class App extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }
    onCompleteComponent = () =>{
        this.setState({
            isComplete: true
        })
    }

    render(){
        var json = {
            "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
            "completedHtmlOnCondition": [
                {
                    "expression": "{nps_score} > 8",
                    "html": "<h3>Thank you for your feedback.</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
                }, {
                    "expression": "{nps_score} < 7",
                    "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad for you to share your ideas with us. We highly value all suggestions from our customers. We do our best to improve the product and reach your expectations.</h5><br/>"
                }
            ],
            "pages": [
                {
                    "name": "page1",
                    "elements": [
                        {
                            "type": "comment",
                            "name": "motivation",
                            "title": "What is the primary reason that you are using Campus Cantina?",
                            "isRequired": true
                        }, {
                            "type": "rating",
                            "name": "nps_score",
                            "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
                            "isRequired": true,
                            "rateMin": 0,
                            "rateMax": 10,
                            "minRateDescription": "(Most unlikely)",
                            "maxRateDescription": "(Most likely)"
                        }, {
                            "type": "checkbox",
                            "name": "promoter_features",
                            "visibleIf": "{nps_score} >= 9",
                            "title": "What features do you value the most?",
                            "isRequired": true,
                            "validators": [
                                {
                                    "type": "answercount",
                                    "text": "Please select two features maximum.",
                                    "maxCount": 2
                                }
                            ],
                            "hasOther": true,
                            "choices": [
                                "Performance", "Stability", "User Interface", "Complete Functionality"
                            ],
                            "otherText": "Other feature:",
                            "colCount": 2
                        }, {
                            "type": "comment",
                            "name": "passive_experience",
                            "visibleIf": "{nps_score} > 6  and {nps_score} < 9",
                            "title": "What is the primary reason for your score?"
                        }, {
                            "type": "comment",
                            "name": "disappointed_experience",
                            "visibleIf": "{nps_score} notempty",
                            "title": "What improvement could we make on the Website?"
                        }
                    ]
                },
                {
                    "name": "page2",
                    "title": "Optional Demographics",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "gender",
                            "title": "What gender do you identify as?",
                            "isRequired": false, 
                            "colCount": 2,
                            "hasOther": true,
                            "choices": [
                                "Male",
                                "Female",
                                "Non-binary"
                            ]
                        }, {
                            "name": "birthdate",
                            "type": "text",
                            "inputType": "date",
                            "startWithNewLine": false,
                            "title": "Your birthdate:",
                            "isRequired": false,
                            "autoComplete": "bdate"
                        }, 
                        {
                            "type": "dropdown",
                            "name": "major",
                            "title": "What is your major of study?",
                            "isRequired": false,
                            "startWithNewLine": false,
                            "colCount": 0,
                            "hasOther": true,
                            "choicesOrder": "asc",
                            "choices": [
                                "BA Art: Art Education",
                                "BA Art: Art History",
                                "BA Art: Studio",
                                "BFA Art: Graphic Design",
                                "BFA Art: Painting and Drawing",
                                "BFA Art: Photography and Media Art",
                                "BFA Art: Sculpture",
                                "BS Biology: General",
                                "BS Biology: Preprofessional",
                                "BS Biology: STEM Education",
                                "BS Criminal Justice",
                                "BA English: Creative Writing",
                                "BA English: Literary Studies",
                                "BA English: Rhetoric and Professional Writing",
                                "BS Environmental Science: Biodiversity, Conservation, and Natural Resources",
                                "BS Environmental Science: Earth, Atmosphere, and Geological Resources",
                                "BS Environmental Science: Environmental Health",
                                "BS Environmental Science: Environmental Policy and Planning",
                                "BS Environmental Science: Geographic and Cartographic Science",
                                "BS Environmental Science: Natural Resources Administration and Enforcement",
                                "BS Geology: Geology",
                                "BS Geology: Environmental Geology",
                                "BS Geology: STEM Education",
                                "BA History",
                                "BA Humanities: International Studies",
                                "BA Humanities: Liberal Arts",
                                "BA Humanities: Women, Gender and Sexuality Studies",
                                "BS Mathematics: Actuarial Science",
                                "BS Mathematics: General Mathematics",
                                "BS Mathematics: STEM Education",
                                "BA Modern and Classical Languages and Literatures: Classics",
                                "BA Modern and Classical Languages and Literatures: French",
                                "BA Modern and Classical Languages and Literatures: Latin American Studies",
                                "BA Modern and Classical Languages and Literatures: Spanish",
                                "BA Music",
                                "BM Music: Composition",
                                "BM Music: Instrumental Music Education",
                                "BM Music: Instrumental Performance",
                                "BM Music: Music Therapy",
                                "BM Music: Vocal Music Education",
                                "BM Music: Vocal Performance",
                                "BA Philosophy and Religion: Combined",
                                "BA Philosophy and Religion: Philosophy",
                                "BA Philosophy and Religion: Religious Studies",
                                "BS Physics: Physics",
                                "BS Physics: Biophysics",
                                "BS Physics: STEM Education",
                                "BS Political Science and Public Service: American Politics",
                                "BS Political Science and Public Service: International and Comparative Studies",
                                "BS Political Science and Public Service: Politics",
                                "BS Political Science and Public Service: Public Administration and Nonprofit Management",
                                "BS Political Science and Public Service: Public Law",
                                "BS Political Science and Public Service: Public Policy",
                                "BS Psychology",
                                "BA Sociology and Anthropology: Anthropology",
                                "BS Sociology and Anthropology: Anthropology",
                                "BS Sociology and Anthropology: Sociology",
                                "BA Theatre",
                                "BS Computer Science: Cyber Security",
                                "BS Computer Science: Data Science",
                                "BS Computer Science: Software Systems",
                                "BS Computer Science: STEM Education",
                                "BSCpE Computer Engineering",
                                "BSChE Chemical Engineering",
                                "BSChE Chemical Engineering: Environmental",
                                "BSCE Civil Engineering",
                                "BSCE Civil Engineering: Environmental",
                                "BSEE Electrical Engineering",
                                "BSME Mechanical Engineering",
                                "BS Engineering Technology Management: Engineering Management",
                                "BS Engineering Technology Management: Construction Management",
                                "BAS Mechatronics Engineering Technology",
                                "BS Interdisciplinary Educational Studies: Child and Family Studies",
                                "BS Interdisciplinary Educational Studies: Early Childhood and Early Childhood Special Education",
                                "BS Interdisciplinary Educational Studies: Elementary Education K-5 and English as a Second Language PreK-12",
                                "BS Interdisciplinary Educational Studies: Exceptional Learning K-8 Interventionist",
                                "BS Interdisciplinary Educational Studies: Exceptional Learning K-12 Comprehensive",
                                "BIS Integrated Studies",
                                "BAS Applied Leadership",
                                "BS Middle Grades: English",
                                "BS Middle Grades: Mathematics",
                                "BS Middle Grades: Natural Sciences",
                                "BS Middle Grades: Social Sciences",
                                "BS Secondary Education: Economics",
                                "BS Secondary Education: English",
                                "BS Secondary Education: Geography",
                                "BS Secondary Education: History",
                                "BS Secondary Education: Political Science",
                                "BS Health Human Performance: Exercise and Health Sciences",
                                "BS Health Human Performance: Health and Physical Education K-12",
                                "BS Health Human Performance: Sport, Outdoor Recreation and Tourism Management",
                                "BS Interior Architecture",
                                "BSN Nursing",
                                "BSN Nursing: RN to BSN",
                                "BSW Social Work",
                                "BSBA Accounting",
                                "BA Economics",
                                "BA Economics: International Public Policy",
                                "BSBA Economics",
                                "BSBA Economics: Financial Economics",
                                "BSBA Finance: Business Finance",
                                "BSBA Finance: Investments",
                                "BSBA Human Resource Management",
                                "BSBA Management",
                                "BSBA Management: Business Analytics",
                                "BSBA Entrepreneurship",
                                "BSBA Marketing",
                                "BSBA Marketing: Professional Sales"
                            ]
                        }
                    ]
                }
            ],
            "showQuestionNumbers": "off"
        };
        var surveyRender = !this.state.isComplete ? (
            <Survey.Survey
            json={json}
            showCompletedPage={false}
            onComplete={this.onCompleteComponent}
            />
        ) : null;
        var onSurveyCompletion = this.state.isComplete ? (
            <div>Thank you for completing the survey.</div>
        ) : null;
        return(
            <div className='App'>
                <h1>Survey</h1>
                {surveyRender}
                {onSurveyCompletion}
            </div>
        )

        
    }
}
export default App;
