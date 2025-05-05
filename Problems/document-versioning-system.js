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

