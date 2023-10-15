<template>
  <div class="container pt-4">
    <div class="row pb-4">
      <div class="col">
        <div @click="$router.push('/')"
             class="btn">
          Back to Homepage
        </div>
      </div>
    </div>
    <div v-for="course in courses" :key="course.id"
         class="row d-flex justify-content-center">
      <template v-if="course.id === +$route.params.id">
        <div class="col text-center" style="color:#483089">
          Course id: {{ $route.params.id }}
        </div>
        <h1 class="text-center">{{course.title}}</h1>
        <h4 class="text-center" style="color:#dfd8ff">Category: {{course.category}}</h4>
        <div class="col-xl-6 col-lg-8">
          <p class="text-center">{{course.description}}</p>
        </div>
      </template>
    </div>
    <template v-if="!this.courses.some(course => course.id === +this.$route.params.id)">
      <h1 class="text-center">Sorry, course not found</h1>
    </template>
  </div>

</template>

<script>
export default {
  name: "SingleCourse",
  data(){
    return{
      courses: [],
      notFoundCourse: false
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
    }
  },
  mounted() {
    this.getCourses();
  },
}
</script>

<style scoped>
.btn {
  padding: 0.7rem 1.2rem;
  color: #483089;
  background: #dfd8ff;
  border-radius: 0;
  font-weight: 700;
  font-size: 14px;
}

.btn:hover {
  background: #c5bbf2;
  transition: 0.2s;
}
</style>