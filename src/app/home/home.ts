import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as Highcharts from 'highcharts';
import { HighchartsChartDirective } from 'highcharts-angular';

export interface Project {
  companyLogo: string;
  projectName: string;
  teamMembers: string[];
  budget: string;
  completion: number;
  width: number;
  progressColor: string;
  githubId?: string;
}

@Component({
  selector: 'app-home',
  imports: [MatCardModule, CommonModule, HighchartsChartDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  showprojectscard: boolean = false;

  projects: Project[] = [
    {
      companyLogo: '/icons/image/images/png/Github.png',
      projectName: 'Material UI XD Version',
      teamMembers: [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=8',
      ],
      budget: '$14,000',
      completion: 60,
      width: 0,
      progressColor: 'col-blue',
      githubId: 'github-logo',
    },
    {
      companyLogo: '/icons/image/images/png/Github.png',
      projectName: 'Add Progress Track',
      teamMembers: [
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5',
        'https://i.pravatar.cc/150?img=6',
      ],
      budget: '$3,000',
      completion: 10,
      width: 0,
      progressColor: 'col-blue',
      githubId: 'github-logo',
    },
    {
      companyLogo: '/icons/image/images/png/Adobe_XD.png',
      projectName: 'Fix Platform Errors',
      teamMembers: ['https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=8'],
      budget: 'Not set',
      completion: 100,
      width: 0,
      progressColor: 'col-green',
    },
    {
      companyLogo: '/icons/image/images/png/spotify.png',
      projectName: 'Launch our Mobile App',
      teamMembers: [
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=6',
        'https://i.pravatar.cc/150?img=9',
      ],
      budget: '$20,500',
      completion: 100,
      width: 0,
      progressColor: 'col-green',
    },
    {
      companyLogo: '/icons/image/images/png/slack.png',
      projectName: 'Add the new pricing page',
      teamMembers: ['https://i.pravatar.cc/150?img=8', 'https://i.pravatar.cc/150?img=2'],
      budget: '$500',
      completion: 25,
      width: 0,
      progressColor: 'col-blue',
    },
    {
      companyLogo: '/icons/image/images/png/inversion.png',
      projectName: 'Redesign New online Shop',
      teamMembers: [
        'https://i.pravatar.cc/150?img=5',
        'https://i.pravatar.cc/150?img=7',
        'https://i.pravatar.cc/150?img=9',
      ],
      budget: '$2,000',
      completion: 40,
      width: 0,
      progressColor: 'col-blue',
    },
  ];

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.projects.forEach((item) => {
  //       item.width = item.completion;
  //     });
  //   }, 3000);
  // }

  // this is for the project card popup
  openprojectcard() {
    this.showprojectscard = !this.showprojectscard;
  }

  Highcharts: typeof Highcharts = Highcharts;

  chartoptioncol: Highcharts.Options = {   // this will descides how the chart will look
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: '145px',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '12px',
        },
      },
      lineColor: '#ffffff',
      lineWidth: 1,
    },
    colors: ['#ffffff'],
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '12px',
        },
      },
      gridLineWidth: 1,
      gridLineDashStyle: 'LongDash', // dash style for grid lines
      lineWidth: 1,
      lineColor: '#ffffff',
      tickInterval: 10,
      max: 80,
      min: 0,
    },
    series: [
      {
        name: 'Website Views',
        data: [40, 30, 60, 10, 25, 35, 15],
        type: 'column',
      },
    ],
    plotOptions: {
      column: {
        borderRadius: 4, // rounded corners for bars
        pointWidth: 6, // adjust bar width
      },
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  chartoptionline: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: '145px',
    },

    title: {
      text: '',
    },
    xAxis: {
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      title: {
        text: '',
      },
      tickInterval: 2,
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '12px',
        },
      },
      lineColor: '#ffffff',
      lineWidth: 1,
    },
    colors: ['#ffffff'],
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        enabled: false,
        style: {
          color: '#ffffff',
          fontSize: '12px',
        },
      },
      gridLineWidth: 1,
      gridLineDashStyle: 'LongDash', // dash style for grid lines
      tickInterval: 10,
      max: 100,
      min: 0,
    },
    series: [
      {
        name: 'Sales',
        data: [40, 30, 60, 10, 25, 35, 15, 74, 79],
        type: 'line',
      },
    ],

    plotOptions: {
      column: {
        borderRadius: 4, // rounded corners for bars
        pointWidth: 10, // adjust bar width
      },
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  chartoptionline2: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: '145px',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      title: {
        text: '',
      },
      tickInterval: 2,
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '12px',
        },
      },
      lineColor: '#ffffff',
      lineWidth: 1,
    },
    colors: ['#ffffff'],
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        enabled: false,
        style: {
          color: '#ffffff',
          fontSize: '12px',
        },
      },
      gridLineWidth: 1,
      gridLineDashStyle: 'LongDash', // dash style for grid lines
      tickInterval: 10,
    },
    series: [
      {
        name: 'Task Done',
        data: [5, 2, 10, 7, 14, 7, 10, 8, 19],
        type: 'line',
      },
    ],
    plotOptions: {
      column: {
        borderRadius: 4, // rounded corners for bars
        pointWidth: 10, // adjust bar width
      },
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  //this is for the popup chart

  //column
  showchartpopupcol: boolean = false;
  closechartpopupcol() {
    this.showchartpopupcol = !this.showchartpopupcol;
  }

  chartoptioncolpopup: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: '300px',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      title: {
        text: '',
      },
      labels: {
        style: {
          color: 'var(--text-number)',
          fontSize: '12px',
        },
      },
      lineColor: 'var(--text-number)',
      lineWidth: 1,
    },
    // colors:['linear-gradient(135deg, #49a3f1, #4789e1)'],
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: 'var(--text-number)',
          fontSize: '12px',
        },
      },
      gridLineWidth: 1,
      gridLineDashStyle: 'LongDash', // dash style for grid lines
      lineWidth: 1,
      lineColor: 'var(--text-number)',
      tickInterval: 10,
      max: 80,
      min: 0,
    },
    series: [
      {
        name: 'Website Views',
        data: [40, 30, 60, 10, 25, 35, 15],
        type: 'column',
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#49a3f1'],
            [1, '#4789e1'],
          ],
        },
      },
    ],
    plotOptions: {
      column: {
        borderRadius: 4, // rounded corners for bars
        pointWidth: 40, // adjust bar width
      },
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  //line
  showchartpopupline: boolean = false;
  closechartpopupline() {
    this.showchartpopupline = !this.showchartpopupline;
  }
  chartoptionlinepopup: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: '300px',
    },

    title: {
      text: '',
    },
    xAxis: {
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      title: {
        text: '',
      },
      tickInterval: 1,
      labels: {
        style: {
          color: 'var(--text-number)',
          fontSize: '12px',
        },
      },
      lineColor: 'var(--text-number)',
      lineWidth: 1,
      gridLineWidth: 1,
    },

    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: 'var(--text-number)',
          fontSize: '12px',
        },
      },
      gridLineWidth: 1,
      tickInterval: 20,
      lineWidth: 1,
      lineColor: 'var(--text-number)',
      max: 100,
      min: 0,
    },
    series: [
      {
        name: 'Sales',
        data: [40, 30, 60, 10, 25, 35, 15, 74, 79],
        type: 'line',
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#66bb6a'],
            [1, '#43a047'],
          ],
        },
      },
    ],

    plotOptions: {
      column: {
        borderRadius: 4, // rounded corners for bars
        pointWidth: 10, // adjust bar width
      },
    },

    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  //line1
  showchartpopupline1: boolean = false;
  closechartpopupline1() {
    this.showchartpopupline1 = !this.showchartpopupline1;
  }
  chartoptionlinepopup1: Highcharts.Options = {   // this will descides how the chart will look // this will descides how the chart will look
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: '300px',
    },

    title: {
      text: '',
    },
    xAxis: {
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      title: {
        text: '',
      },
      tickInterval: 1,
      labels: {
        style: {
          color: 'var(--text-number)',
          fontSize: '12px',
        },
      },
      lineColor: 'var(--text-number)',
      lineWidth: 1,
      gridLineWidth: 1,
    },

    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: 'var(--text-number)',
          fontSize: '12px',
        },
      },
      gridLineWidth: 1,
      tickInterval: 10,
      lineWidth: 1,
      lineColor: 'var(--text-number)',
    },
    series: [
      {
        name: 'Task Done',
        data: [5, 2, 10, 7, 14, 7, 10, 8, 19],
        type: 'line',
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#d90000c4'],
            [1, '#e84949ff'],
          ],
        },
      },
    ],

    plotOptions: {
      column: {
        borderRadius: 4, // rounded corners for bars
        pointWidth: 10, // adjust bar width
      },
    },

    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };
}
