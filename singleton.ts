class CoursesService {
  private static INSTANCE: CoursesService;
  private constructor() {
    console.log(`This coursesService was initialized.`);
  }

  static getInstance() {
    if (!CoursesService.INSTANCE) {
      CoursesService.INSTANCE = new CoursesService();
    }
    return CoursesService.INSTANCE;
  }
}

const service = CoursesService.getInstance();
