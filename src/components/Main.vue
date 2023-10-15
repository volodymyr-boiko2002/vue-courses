<template>
  <div class="container pt-5">
    <div class="row gx-0">
      <h1 class="px-md-0 mb-4">Courses</h1>
      <div class="row gx-0 d-flex justify-content-between">
        <category-filters :categories="categories" @filter="filterByCategory"></category-filters>
        <div class="col-md-4 px-md-0">
          <input v-model.trim="searchText" class="form-control mt-md-0 mt-2" placeholder="Search">
        </div>
      </div>
      <course-info :courses="filteredList"></course-info>
    </div>
  </div>
</template>

<script>
import CourseInfo from "@/components/CourseInfo";
import CategoryFilters from "@/components/CategoryFilters";

export default {
  name: 'Main-component',
  components: {
    CategoryFilters,
    CourseInfo,
  },
  data() {
    return {
      searchText: '',
      selectedCategory: null,
      courses: [],
      categories: [],
    }
  },
  methods: {
    getCourses() {
      this.courses = [
        {
          id: 1, title: 'Design School Launches Innovate Virtual Reality Program',
          description: 'School introduces eco-friendly design program, equipping students with skills to create sustainable solutions for a greener future.',
          price: 112, currency: 'USD', category: 'Design', discountByPercent: 50
        },
        {
          id: 2, title: 'Collaborates with Local Businesses to Revitalize Community Spaces',
          description: 'Description: School and fashion icon join forces for a groundbreaking project merging fashion and design expertise to set new trends.',
          price: 45, currency: 'EUR', category: 'Copyright', discountByPercent: 20
        },
        {
          id: 3, title: 'Hosts international Design Conference, Inspiring Creativity',
          description: 'School launches program empowering students to address social through innovative design solutions, making positive impact.',
          price: 65, currency: 'USD', category: 'Programming'
        },
        {
          id: 4, title: 'Design School Launches Innovate Virtual Reality Program',
          description: 'School introduces eco-friendly design program, equipping students with skills to create sustainable solutions for a greener future.',
          price: 25, currency: 'USD', category: 'UI/UX Design'
        },
        {
          id: 5, title: 'Unveils State-of-the-Art Design Lab for Student Innovation',
          description: 'School becomes a creative hub as it hosts an international design competition, showcasing global design talent and perspectives.',
          price: 40, currency: 'USD', category: 'UI/UX Design', discountByPercent: 10
        },
        {
          id: 6, title: 'Design School Students Win Prestigious National Design Competition',
          description: 'School partners with a tech startup, exploring cutting-edge design solutions that integrate advanced technology.',
          price: 55, currency: 'EUR', category: 'Programming'
        },
      ];
      this.categories = [
        {id: 1, name: 'All Courses', isActive: true},
        {id: 2, name: 'Design', isActive: false},
        {id: 3, name: 'Copyright', isActive: false},
        {id: 4, name: 'Programming', isActive: false},
        {id: 5, name: 'UI/UX Design', isActive: false}
      ];
    },

    filterByCategory(category){
      this.categories.forEach( //Deactivate style for all category buttons
          (item) => item.isActive = false
      );
      this.categories.forEach( //Activate style for selected category button
          (item) => {
            if (category === item.name){
              item.isActive = true;
            }
          }
      );
      this.selectedCategory = category;
    }
  },
  mounted() {
    this.getCourses();
  },
  computed: {
    filteredList() {
      return this.courses.filter(list => {
        const categoryFiltered = this.selectedCategory
            ? list.category === this.selectedCategory || this.selectedCategory === 'All Courses'
            : true;
        const searchTextFiltered = list.title.toLowerCase().includes(this.searchText.toLowerCase());
        return categoryFiltered && searchTextFiltered;
      })
    }
  }
}
</script>

<style scoped>

</style>