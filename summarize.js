function extractLinks() {
    // Get the content of the contenteditable div
    var orgTextContent = document.getElementById('org-text').innerHTML;

    var tempElement = document.createElement('div');
    tempElement.innerHTML = orgTextContent;

    // Extract all links (anchor tags) and their href attributes
    var links = tempElement.getElementsByTagName('a');

    // Display the links in a paragraph
    var displayParagraph = document.getElementById('result-para');
    displayParagraph.innerHTML = "List of Links:";

    if(links.length==0){displayParagraph.innerHTML += " NONE";}
    for (var i = 0; i < links.length; i++) {
        var linkText = links[i].innerText;
        var linkHref = links[i].getAttribute('href');
        displayParagraph.innerHTML += "<br>" + (i + 1) + ". " + linkText + ": " + linkHref;
    }
}

function performNLP(text) {
    // NLP.js setup
    const Nlp = require('nlp.js');
    const { NerManager, NlpAnalyzer } = Nlp;

    // Create an NLP manager
    const manager = new NerManager();
    manager.addNamedEntityText('name', 'John Doe');
    manager.addNamedEntityPattern('number', /\d+/);
    manager.addNamedEntityPattern('dimension', /\d+\s*[xX]\s*\d+/);
    manager.addNamedEntityPattern('percentage', /\d+\s*%/);
    manager.addNamedEntityPattern('email', /[^@\s]+@[^@\s]+\.[^@\s]+/);

    // Create an NLP instance and add the manager
    const nlp = new Nlp();
    nlp.use(new NlpAnalyzer({ ner: { manager } }));

    // Process the text
    const response = nlp.process(text);

    // Extracted entities
    return response.entities;
}

function displayResults(entities) {
    var displayParagraph = document.getElementById('display-paragraph');
    displayParagraph.innerHTML = "Extracted Entities:";

    // Display extracted entities and links
    entities.forEach((entity, index) => {
        displayParagraph.innerHTML += `<br>- Entity ${index + 1}: <span class="entity" onclick="scrollToEntity(${index})">${entity.entity}</span><br>  Value: ${entity.resolution.value}`;
    });

    links.forEach((link, index) => {
        displayParagraph.innerHTML += `<br>- Link ${index + 1}: ${link}`;
    });
}

function scrollToEntity(index) {
    // Scroll to the corresponding entity in the original text
    const orgText = document.getElementById('org-text');
    const entities = orgText.getElementsByClassName('entity');
    
    if (entities[index]) {
        entities[index].scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight the entity
        entities[index].classList.add('highlight');
        setTimeout(() => {
            entities[index].classList.remove('highlight');
        }, 2000); // Remove highlight after 2 seconds
    }
}