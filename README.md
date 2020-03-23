This project host the input content for the Thales Group organization documentation (github pages)

It relies on https://www.mkdocs.org/ and consists in several markdown files that allow to generate the documentation and deploy it to https://github.com/thalesgroup

#Updating content procedure

1. Clone the repository and checkout the gh-pages branch
2. Install mkdocs : https://www.mkdocs.org/#installation
3. If needed, update mkdocs.yml descriptor file
4. Add/update docs/*.md files 
5. Test the documentation by launching mkdocs serve from directory containing mkdocs.yml
6. Open a web browser at http://localhost:8000
7. Browse and test the documentation structure, navigation and content
8. Commit your local modifications and request a merge request on gh-pages branch
