fetch('http://localhost:3000/api/cms')
  .then(res => res.json())
  .then(async data => {
    for (let doc of data) {
      let docStr = JSON.stringify(doc.content);
      if (docStr.includes('PM.jpeg')) {
        docStr = docStr.replace(/"PM\.jpeg"/g, '"/logo.png"');
        doc.content = JSON.parse(docStr);
        await fetch('http://localhost:3000/api/cms', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pageId: doc.pageId,
            sectionId: doc.sectionId,
            content: doc.content
          })
        });
        console.log('Fixed', doc.pageId, doc.sectionId);
      }
    }
  }).catch(console.error);
