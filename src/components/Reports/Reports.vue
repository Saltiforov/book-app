<template>
  <div className="report reports__container">
    <div className="report__layout flex justify-content-between">
      <div class="report__item">
        <div className="report__card">
          <h3 className="text-center">
            Звіт по продажам, за минулий рік
          </h3>
          <div className="worker__reports" ref="chart"></div>
        </div>
      </div>
      <div class="chart-info text-center mb-2">
        <h2>Звіт про продажі</h2>
        <p>На графіку нижче відображається звіт про продажі, де відображена динаміка загального обсягу продажів протягом року, розподілених за місяцями.</p>
        <p>Горизонтальна вісь (X-вісь) представляє назви місяців, починаючи з лютого і закінчуючи січнем наступного року.</p>
        <p>Вертикальна вісь (Y-вісь) показує суму продажів у тисячах доларів.</p>
        <p>Кожна стовпчикова діаграма представляє окремий місяць з відповідним обсягом продажів, який відображається як висота стовпчика.</p>
        <p>При наведенні курсору на будь-який стовпчик, ви можете побачити точну суму продажів для цього місяця у форматі "$X тисяч".</p>
        <p>Цей графік дозволяє легко визначити найбільш та найменш прибуткові місяці, а також порівняти продажі за різні періоди.</p>
      </div>

      <div class="report__item mt-5">
        <div className="report__card">
          <h3 className="text-center">
            Кількість поставлених книг (по поставникам)
          </h3>
          <div className="worker__reports" ref="supplierChart"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts';
import APIService from "@/services/api";
import dayjs from 'dayjs'

export default {
  name: "Reports",
  data() {
    return {
      reports: null,
      supplierReports: null,
      chartOptions: {
        series: [{
          name: 'Прибуток',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec', 'Jan'],
        },
        yaxis: {
          title: {
            text: '₴ (тисячі)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "₴ " + val
            }
          }
        }
      },
      chartOptions2: {
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      }
    };
  },

  computed: {},

  methods: {
    async fetchReportsData() {
      this.apiService = new APIService();
      this.reports = await this.apiService.getSalesReports();
      this.supplierReports = await this.apiService.getSupplierReports();

      const categories = this.reports.map((report) => report.month);
      const data = this.reports.map((report) => report.totalPrice);

      this.chartOptions.xaxis.categories = categories;
      this.chartOptions.series[0].data = data;

      const chart = new ApexCharts(this.$refs.chart, this.chartOptions);
      chart.render();

      const supplierCategories = this.supplierReports.map((supplier) => supplier.supplierName);
      const supplierData = this.supplierReports.map((supplier) => supplier.bookCount);

      this.chartOptions2.xaxis.categories = supplierCategories;
      this.chartOptions2.series[0].data = supplierData;

      const supplierChart = new ApexCharts(this.$refs.supplierChart, this.chartOptions2);
      supplierChart.render();
    },
  },

  mounted() {
    this.fetchReportsData();
  },
};
</script>

<style lang="scss" scoped>
.worker__reports {
  width: 1800px;
}
.report {
  &__card {
    max-width: 1800px;
    border: 1px solid black;
    margin: 30px;
  }

  &__layout {
    flex-direction: column;
  }

  &__item {
    display: flex;
  }
}
</style>