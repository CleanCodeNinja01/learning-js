/*

Problem Statement:

Design a class DocumentVersioningSystem to manage a document with version control. The system should support editing parts of the document and retrieving previous versions.

Implement the following methods:

1. edit(startIdx: number, endIdx: number, newText: string): void

* Replaces the content in the current document from startIdx (inclusive) to endIdx (exclusive) with newText.

* Each call to edit should create a new version of the document.

2. get_version(version: number): string

Returns the document content of the specified version number.

Versioning starts from 0 (initial version).

3. get_current(): string

Returns the latest version of the document.


*/

class DocumentVersioningSystem {
    constructor() {
        this.versions = [""];
        this.currentVersion = 0;
    }

    edit(startIdx, endIdx, newText) {
        let currentDoc = this.versions[this.currentVersion];
        let newDoc = currentDoc.slice(0, startIdx) + newText + currentDoc.slice(endIdx);
        this.versions.push(newDoc);
        this.currentVersion++;
    }

    get_version(version) {
        return this.versions[version];
    }

    get_current() {
        return this.versions[this.currentVersion];
    }
}

const doc = new DocumentVersioningSystem("Hello World");

doc.edit(6, 11, "JS");           // Version 1: "Hello JS"
doc.edit(0, 5, "Hi");            // Version 2: "Hi JS"

console.log(doc.get_version(0)); // "Hello World"
console.log(doc.get_version(1)); // "Hello JS"
console.log(doc.get_current());  // "Hi JS"
