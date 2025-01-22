

# Image Processing API

 **Overview**

The Image Processing API is a Node.js-based application that provides two primary functionalities:

1. **Placeholder API** : Dynamically resize and serve placeholder images for frontend prototyping.

2. **Image Processing Library** : Serve properly scaled versions of stored images to improve frontend performance and reduce page load size.
The API is built using **Express.js** , **TypeScript** , and **Sharp** , with a focus on scalability, maintainability, and industry best practices. This project demonstrates how to process images efficiently and serves as a foundation for building enterprise-level solutions.

---

**Features**
- Resize images on-the-fly via query parameters.

- Serve optimized versions of stored images.

- Caching mechanism to improve performance for repeated requests.

- Built using TypeScript for type safety and maintainability.

- Fully tested with **Jasmine** .

- Linting and formatting using **ESLint**  and **Prettier** .

- Modular architecture for scalability.


---

**Technologies Used**
- **Node.js**  and **Express.js** : Backend server and API routing.

- **TypeScript** : Typed JavaScript for enhanced readability and debugging.

- **Sharp** : High-performance image processing.

- **Jasmine** : Unit testing framework.

- **ESLint**  and **Prettier** : Code quality and formatting tools.


---

**Setup and Installation** **Prerequisites**
- Node.js (v16 or later)

- npm or yarn

- TypeScript (globally installed)
**Steps**
1. Clone the repository:


```bash
git clone git@github.com:pedrole/image-processing.git
cd image-processing
```

2. Install dependencies:


```bash
npm install
```

3. Build the project:


```bash
npm run build
```

4. Start the server:


```bash
npm start
```

5. Run tests:


```bash
npm test
```

6. Lint and format code:


```bash
npm run lint
npm run format
```


---

**API Endpoints** **Resize Image** **GET /api/images/resize**
- **Description** : Dynamically resize an image and return the resized version.

- **Query Parameters** :
  - `fileName` (required): Name of the image file in the `/assets/full` directory.

  - `width` (required): Desired width of the image.

  - `height` (required): Desired height of the image.

- **Response** :
  - Returns the resized image as a binary stream (`image/jpeg`).

#### Example:


```bash
GET http://localhost:3000/api/images?filename=fjord&width=300&height=300
```


---

**Folder Structure**

```bash
image-processing-api/
│
├── src/
│   ├── utilities/    # Image processing middleware
│   ├── assets/
│   ├── routes/              # API routes
│   ├── tests/               # Unit tests
│   ├── index.ts             # Entry point
│
├── build/                    # Compiled TypeScript code
│
│
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and dependencies
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── spec/support/jasmine.json             # Jasmine test configuration
└── README.md                # Documentation
```


---

**Development Workflow**
1. Modify files in the `src/` directory.

2. Run `npm run build` to compile TypeScript to JavaScript.

3. Use `npm run lint` and `npm run format` to ensure code quality.

4. Run `npm test` to ensure all tests pass.

5. Use `assets/full/` directory to add or manage image files.


---

**Testing**
- Unit tests are written using **Jasmine**  and are located in the `src/tests/` directory.

- Run tests:

```bash
npm test
```

- Example tests:
  - Endpoint tests for `/api/images`.

  - Middleware tests for image processing logic.

<!--  - Caching mechanism tests.-->



---

**Caching**
- Resized images are cached on disk to reduce processing time for repeated requests.

- Cached images are stored in the `/thumb` directory .

- The API automatically serves cached images if available.


---

**Error Handling**
- Detailed error messages for invalid parameters, missing files, or unsupported operations.

- Example error responses:
  - **400 Bad Request** : Missing or invalid query parameters.

  - **404 Not Found** : Image not found in `/full`.

  - **500 Internal Server Error** : Unexpected server errors.


---

**Improvements and Scalability**
- Add support for other image formats (e.g., PNG, GIF, WebP).

- Implement user authentication and access control.

- Integrate with a cloud storage provider (e.g., AWS S3).

- Add more advanced image processing options (e.g., cropping, filters).

- Extend testing to cover integration and performance tests.


---
