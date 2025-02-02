const books = [
    {
      id: 1,
      title: "Romeo and Juliet",
      slug: "romeo-and-juliet",
      author: "William Shakespeare",
      genre: "Tragedy",
      keywords: ["love", "fate", "family", "conflict", "revenge"],
      description: "A tragedy about two young lovers whose deaths ultimately unite their feuding families.",
      longDescription: "In 'Romeo and Juliet', Shakespeare explores the themes of love, fate, and family loyalty. Set in Verona, the story follows the forbidden romance between Romeo Montague and Juliet Capulet, two members of rival families. Their love leads to tragic consequences as misunderstandings and external pressures force them into a desperate situation, ultimately leading to their untimely deaths.",
      thumbnail: "/book-images/MV5BZjBhYjkxN2EtNDc1Yy00NTViLTkxMjQtMDYxMzM0MzA3NGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      coverImage: "/book-images/MV5BZjBhYjkxN2EtNDc1Yy00NTViLTkxMjQtMDYxMzM0MzA3NGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      isNew: true,
      majorRelease: false,
      pdfLink: "/book-files/romeo-and-juliet_PDF_FolgerShakespeare.pdf",
      status: "available",
      details: {
        pages: 123,
        publishedYear: 1597,
        language: "English"
      },
      ratings: {
        averageRating: 4.6,
        totalReviews: 500000
      }
    },
    {
      id: 2,
      title: "The Lost Prince",
      slug: "the-lost-prince",
      author: "Emmanuel Nkateko Nghondzweni",
      genre: "Tragedy",
      keywords: ["love", "fate", "family", "conflict", "revenge"],
      description: "N/A",
      longDescription: " COMING SOON",
      thumbnail: "/book-images/Green_and_Brown_Bold_and_Stylized_Typography_Paranormal___Fantasy_Wattpad_B_20241231_100031_0000.jpg",
      coverImage: "/book-images/Green_and_Brown_Bold_and_Stylized_Typography_Paranormal___Fantasy_Wattpad_B_20241231_100031_0000.jpg",
      isNew: true,
      majorRelease: false,
      pdfLink: "/book-files/romeo-and-juliet_PDF_FolgerShakespeare.pdf",
      status: "coming-soon",
      details: {
        pages: 'COMING SOON',
        publishedYear: 2025,
        language: "English"
      },
      ratings: {
        averageRating: 'NEW',
        totalReviews: 0
      }
    },
  ];
  
  
  export default books;
