import { useThemeStore } from '@/store/themeStore'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  ScatterChart,
  Scatter,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
  RadialBarChart,
  RadialBar,
  Treemap,
  Funnel,
  FunnelChart,
} from 'recharts'

// Sample data for different chart types
const lineData = [
  { month: 'Jan', revenue: 4000, profit: 2400, costs: 1600 },
  { month: 'Feb', revenue: 3000, profit: 1398, costs: 1602 },
  { month: 'Mar', revenue: 5000, profit: 3800, costs: 1200 },
  { month: 'Apr', revenue: 7800, profit: 5908, costs: 1892 },
  { month: 'May', revenue: 8900, profit: 6800, costs: 2100 },
  { month: 'Jun', revenue: 9000, profit: 7300, costs: 1700 },
]

const barData = [
  { category: 'Product A', q1: 4000, q2: 2400, q3: 2400, q4: 3200 },
  { category: 'Product B', q1: 3000, q2: 1398, q3: 2210, q4: 2780 },
  { category: 'Product C', q1: 2000, q2: 3800, q3: 2500, q4: 3908 },
  { category: 'Product D', q1: 2780, q2: 3908, q3: 3200, q4: 4800 },
]

const pieData = [
  { name: 'Desktop', value: 45, percentage: 45 },
  { name: 'Mobile', value: 30, percentage: 30 },
  { name: 'Tablet', value: 15, percentage: 15 },
  { name: 'Other', value: 10, percentage: 10 },
]

const radarData = [
  { skill: 'JavaScript', A: 120, B: 110, fullMark: 150 },
  { skill: 'React', A: 98, B: 130, fullMark: 150 },
  { skill: 'Node.js', A: 86, B: 90, fullMark: 150 },
  { skill: 'Python', A: 99, B: 85, fullMark: 150 },
  { skill: 'Design', A: 85, B: 95, fullMark: 150 },
  { skill: 'Database', A: 65, B: 85, fullMark: 150 },
]

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 350 },
  { x: 180, y: 350, z: 450 },
  { x: 160, y: 450, z: 550 },
]

const radialData = [
  { name: 'Sales', uv: 31.47, fill: '#8884d8' },
  { name: 'Marketing', uv: 26.69, fill: '#83a6ed' },
  { name: 'Development', uv: 15.69, fill: '#8dd1e1' },
  { name: 'Support', uv: 8.22, fill: '#82ca9d' },
  { name: 'Admin', uv: 5.63, fill: '#a4de6c' },
]

const treemapData = [
  {
    name: 'Analytics',
    children: [
      { name: 'Users', size: 2000 },
      { name: 'Sessions', size: 3000 },
      { name: 'Pageviews', size: 5000 },
      { name: 'Events', size: 4000 },
    ],
  },
]

const funnelData = [
  { value: 100, name: 'Visit', fill: '#8884d8' },
  { value: 80, name: 'Click', fill: '#83a6ed' },
  { value: 50, name: 'Purchase', fill: '#8dd1e1' },
  { value: 40, name: 'Repeat', fill: '#82ca9d' },
]

export function ChartsPreview() {
  const theme = useThemeStore((state) => state.theme)

  // Convert HSL to hex for charts
  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100
    const a = s * Math.min(l, 1 - l) / 100
    const f = (n: number) => {
      const k = (n + h / 30) % 12
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
      return Math.round(255 * color).toString(16).padStart(2, '0')
    }
    return `#${f(0)}${f(8)}${f(4)}`
  }

  const primaryColor = hslToHex(
    theme.colors.primary.hsl.h,
    theme.colors.primary.hsl.s,
    theme.colors.primary.hsl.l
  )

  const secondaryColor = hslToHex(
    theme.colors.secondary.hsl.h,
    theme.colors.secondary.hsl.s,
    theme.colors.secondary.hsl.l
  )

  const accentColor = hslToHex(
    theme.colors.accent.hsl.h,
    theme.colors.accent.hsl.s,
    theme.colors.accent.hsl.l
  )

  const mutedColor = hslToHex(
    theme.colors.muted.hsl.h,
    theme.colors.muted.hsl.s,
    theme.colors.muted.hsl.l
  )

  const foregroundColor = hslToHex(
    theme.colors.foreground.hsl.h,
    theme.colors.foreground.hsl.s,
    theme.colors.foreground.hsl.l
  )

  const borderColor = hslToHex(
    theme.colors.border.hsl.h,
    theme.colors.border.hsl.s,
    theme.colors.border.hsl.l
  )

  const chartColors = [primaryColor, secondaryColor, accentColor, mutedColor]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Comprehensive chart components showcasing theme colors and styles
        </p>
      </div>

      {/* 2x2 Grid layout for charts */}
      <div className="grid grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
              <XAxis dataKey="month" stroke={foregroundColor} />
              <YAxis stroke={foregroundColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke={primaryColor} strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke={secondaryColor} strokeWidth={2} />
              <Line type="monotone" dataKey="costs" stroke={accentColor} strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Quarterly Performance</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
              <XAxis dataKey="category" stroke={foregroundColor} />
              <YAxis stroke={foregroundColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
              <Legend />
              <Bar dataKey="q1" fill={primaryColor} />
              <Bar dataKey="q2" fill={secondaryColor} />
              <Bar dataKey="q3" fill={accentColor} />
              <Bar dataKey="q4" fill={mutedColor} />
            </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Growth Analysis</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
              <XAxis dataKey="month" stroke={foregroundColor} />
              <YAxis stroke={foregroundColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
              <Area type="monotone" dataKey="revenue" stackId="1" stroke={primaryColor} fill={primaryColor} fillOpacity={0.6} />
              <Area type="monotone" dataKey="profit" stackId="1" stroke={secondaryColor} fill={secondaryColor} fillOpacity={0.6} />
            </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Device Distribution</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.percentage}%`}
                outerRadius={80}
                fill={primaryColor}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
            </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Skill Assessment</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke={borderColor} />
              <PolarAngleAxis dataKey="skill" stroke={foregroundColor} />
              <PolarRadiusAxis stroke={foregroundColor} />
              <Radar name="Team A" dataKey="A" stroke={primaryColor} fill={primaryColor} fillOpacity={0.6} />
              <Radar name="Team B" dataKey="B" stroke={secondaryColor} fill={secondaryColor} fillOpacity={0.6} />
              <Legend />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
            </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Scatter Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Correlation Analysis</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
              <XAxis type="number" dataKey="x" name="value" stroke={foregroundColor} />
              <YAxis type="number" dataKey="y" name="score" stroke={foregroundColor} />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
              <Scatter name="Dataset" data={scatterData} fill={primaryColor} />
            </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Composed Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Combined Metrics</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={lineData}>
              <CartesianGrid stroke={borderColor} strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke={foregroundColor} />
              <YAxis stroke={foregroundColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
              <Legend />
              <Bar dataKey="costs" fill={accentColor} />
              <Line type="monotone" dataKey="revenue" stroke={primaryColor} strokeWidth={2} />
              <Area type="monotone" dataKey="profit" fill={secondaryColor} fillOpacity={0.3} stroke={secondaryColor} />
            </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radial Bar Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Department Budget</h3>
          <div className="w-full" style={{ aspectRatio: '1/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="90%" data={radialData}>
              <RadialBar dataKey="uv" cornerRadius={10} fill={primaryColor}>
                {radialData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </RadialBar>
              <Legend />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
            </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Funnel Chart */}
        <div className="bg-card p-4 rounded-lg border col-span-full">
          <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
          <div className="w-full" style={{ aspectRatio: '2/1' }}>
            <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.colors.card.value,
                  border: `1px solid ${borderColor}`,
                  borderRadius: theme.effects.borderRadius.md
                }}
              />
              <Funnel
                dataKey="value"
                data={funnelData}
                isAnimationActive
              >
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Funnel>
            </FunnelChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold" style={{ color: primaryColor }}>$124,500</div>
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <div className="text-xs mt-2" style={{ color: secondaryColor }}>+12.5% from last month</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold" style={{ color: secondaryColor }}>8,420</div>
          <p className="text-sm text-muted-foreground">Active Users</p>
          <div className="text-xs mt-2" style={{ color: accentColor }}>+5.2% from last week</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold" style={{ color: accentColor }}>92.3%</div>
          <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          <div className="text-xs mt-2" style={{ color: primaryColor }}>+2.1% improvement</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold" style={{ color: mutedColor }}>3.2s</div>
          <p className="text-sm text-muted-foreground">Avg. Load Time</p>
          <div className="text-xs mt-2 text-destructive">-0.5s faster</div>
        </div>
      </div>
    </div>
  )
}