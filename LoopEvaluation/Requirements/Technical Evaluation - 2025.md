***Technical evaluations will not pass if they are not data-driven and written in JS/TS.***

**Important Reminder: Accuracy is Key**

*We fully encourage the use of AI tools like ChatGPT to assist in completing the evaluation. However, it’s essential that you double-check your work for accuracy before submitting. While AI can be a helpful resource, errors can slip through if not carefully reviewed. As part of the role, attention to detail and quality assurance is a must—just like it would be in the position you're applying for.*

*Please take the extra step to ensure everything is correct before submission. This will help save valuable time for both you and our team as we review your work. Thanks for your understanding, and good luck\!*

### **Acceptance Criteria**

**Objective**: Create a Playwright-driven test suite that leverages **data-driven techniques** to minimize code duplication and improve scalability. By driving test scenarios from a JSON object, we can dynamically adapt each test case without repeating code, ensuring a clean and maintainable structure as new cases are added. **Please only use JavaScript/TypeScript.**

#### **Setup and Preparation**

1. Set up a new project or workspace dedicated to this task.  
2. Ensure Playwright and its necessary dependencies are installed and configured.

**Login Automation** *(Updated 12/2/24)*

Implement login automation for Asana using the following credentials:

* Demo App: [https://animated-gingersnap-8cf7f2.netlify.app/](https://animated-gingersnap-8cf7f2.netlify.app/)  
* Email: admin  
* Password: password123

The script should input these credentials into the login form and submit it successfully.

**Test Case 1**

* Login to Demo App.  
* Navigate to "Web Application."  
* Verify "Implement user authentication" is in the "To Do" column.  
* Confirm tags: "Feature" "High Priority”

**Test Case 2**

* Login to Demo App.  
* Navigate to "Web Application."  
* Verify "Fix navigation bug" is in the "To Do" column.  
* Confirm tags: "Bug"

**Test Case 3**

* Login to Demo App.  
* Navigate to "Web Application."  
* Verify "Design system updates" is in the "In Progress" column.  
* Confirm tags: "Design”

**Test Case 4**

* Login to Demo App.  
* Navigate to "Mobile Application."  
* Verify "Push notification system" is in the "To Do" column.  
* Confirm tags: "Feature”

**Test Case 5**

* Login to Demo App.  
* Navigate to "Mobile Application."  
* Verify "Offline mode" is in the "In Progress" column.  
* Confirm tags: "Feature" & "High Priority”

**Test Case 6**

* Login to Demo App.  
* Navigate to "Mobile Application."  
* Verify "App icon design" is in the "Done" column.  
* Confirm tags: "Design”

---

### **Submission Instructions**

1. Publish your code to a public GitHub repository and provide the link in the Google form.  
2. Provide a short, 2-3 minute video walking through your code to share your solution and your thought process behind it. This is similar to how we share our work with clients and is designed to give us a glimpse into your communication style.   
3. Upload the video into the Google Form.