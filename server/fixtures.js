if (Articles.find().count() === 0) {
    Articles.insert(
        {
            title: "This is the test article",
            body: "This article is automatically created from the fixtures file if there is no data presents in the database",
            created_at: new Date()
        });
    Articles.insert(
        {
            title: "Another test article",
            body: "This is another one just for test",
            created_at: new Date()
        });
    Articles.insert(
        {
            title: "Kinda boring?",
            body: "This is again just for test",
            created_at: new Date()
        }
    );
}