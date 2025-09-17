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
  LabelList,
  Sankey,
  Rectangle,
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
  { name: 'Sales', uv: 31.47 },
  { name: 'Marketing', uv: 26.69 },
  { name: 'Development', uv: 15.69 },
  { name: 'Support', uv: 8.22 },
  { name: 'Admin', uv: 5.63 },
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
  { value: 100, name: 'Visit' },
  { value: 80, name: 'Click' },
  { value: 50, name: 'Purchase' },
  { value: 40, name: 'Repeat' },
]

// New chart data
const stackedAreaData = [
  { month: 'Jan', mobile: 2000, desktop: 3000, tablet: 1000 },
  { month: 'Feb', mobile: 2500, desktop: 2800, tablet: 1200 },
  { month: 'Mar', mobile: 3000, desktop: 3200, tablet: 1100 },
  { month: 'Apr', mobile: 2800, desktop: 3500, tablet: 1300 },
  { month: 'May', mobile: 3200, desktop: 3800, tablet: 1400 },
  { month: 'Jun', mobile: 3500, desktop: 4000, tablet: 1500 },
]

const waterfallData = [
  { name: 'Start', value: 2000, fill: 'primary' },
  { name: 'Sales', value: 500, fill: 'accent' },
  { name: 'Refunds', value: -200, fill: 'destructive' },
  { name: 'Marketing', value: 300, fill: 'accent' },
  { name: 'Costs', value: -400, fill: 'destructive' },
  { name: 'Profit', value: 300, fill: 'accent' },
  { name: 'End', value: 2500, fill: 'primary' },
]

const gaugeData = [
  { name: 'Performance', value: 75, fill: 'primary' },
]

const sankeyData = {
  nodes: [
    { name: 'Homepage' },
    { name: 'Product Page' },
    { name: 'Cart' },
    { name: 'Checkout' },
    { name: 'Success' },
    { name: 'Exit' },
  ],
  links: [
    { source: 0, target: 1, value: 1000 },
    { source: 0, target: 5, value: 200 },
    { source: 1, target: 2, value: 800 },
    { source: 1, target: 5, value: 200 },
    { source: 2, target: 3, value: 600 },
    { source: 2, target: 5, value: 200 },
    { source: 3, target: 4, value: 500 },
    { source: 3, target: 5, value: 100 },
  ],
}

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

  const destructiveColor = hslToHex(
    theme.colors.destructive.hsl.h,
    theme.colors.destructive.hsl.s,
    theme.colors.destructive.hsl.l
  )

  const chartColors = [primaryColor, secondaryColor, accentColor, mutedColor]

  // Update radialData with theme colors
  const radialDataWithColors = radialData.map((item, index) => ({
    ...item,
    fill: chartColors[index % chartColors.length]
  }))

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Comprehensive chart components showcasing theme colors and styles
        </p>
      </div>

      {/* Stats Cards - moved to top */}
      <div className="grid grid-cols-4 gap-4">
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
              <Legend wrapperStyle={{ color: foregroundColor }} />
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
              <Legend wrapperStyle={{ color: foregroundColor }} />
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
                outerRadius={120}
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
              <Legend wrapperStyle={{ color: foregroundColor }} />
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
              <Legend wrapperStyle={{ color: foregroundColor }} />
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
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="90%" data={radialDataWithColors}>
              <RadialBar dataKey="uv" cornerRadius={10} fill={primaryColor} />
              <Legend
                wrapperStyle={{ color: foregroundColor }}
                formatter={(value) => <span style={{ color: foregroundColor }}>{value}</span>}
              />
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

        {/* Custom Funnel Chart */}
        <div className="bg-card p-4 rounded-lg border col-span-full">
          <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
          <div className="w-full flex justify-center items-center py-4" style={{ minHeight: '300px' }}>
            <div className="flex flex-col items-center gap-3 w-full max-w-md">
              {funnelData.map((entry, index) => {
                const widthPercentage = 100 - (index * 20) // Each step is 20% narrower
                const maxValue = funnelData[0].value
                const relativeWidth = (entry.value / maxValue) * 100

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
                    style={{ width: '100%' }}
                  >
                    <div
                      className="relative flex items-center justify-center font-semibold transition-all duration-300"
                      style={{
                        width: `${relativeWidth}%`,
                        height: '60px',
                        backgroundColor: chartColors[index % chartColors.length],
                        borderRadius: theme.effects.borderRadius.lg,
                        boxShadow: theme.effects.shadows.md,
                        minWidth: '200px'
                      }}
                    >
                      <div className="flex items-center gap-4 px-4" style={{ color: '#ffffff' }}>
                        <div className="font-bold text-lg">{entry.name}</div>
                        <div className="text-2xl font-bold">{entry.value}%</div>
                      </div>
                    </div>
                    {index < funnelData.length - 1 && (
                      <div
                        className="w-0 h-0 mt-1 mb-1"
                        style={{
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: `8px solid ${mutedColor}`,
                          opacity: 0.5
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Treemap Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Content Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <Treemap
              data={treemapData}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke={borderColor}
              fill={primaryColor}
              content={({ x, y, width, height, name, value }) => (
                <g>
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    style={{
                      fill: chartColors[Math.floor(Math.random() * chartColors.length)],
                      stroke: borderColor,
                      strokeWidth: 2,
                      strokeOpacity: 0.5,
                    }}
                  />
                  <text
                    x={x + width / 2}
                    y={y + height / 2}
                    fill={foregroundColor}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    {name}
                  </text>
                  <text
                    x={x + width / 2}
                    y={y + height / 2 + 20}
                    fill={foregroundColor}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={12}
                    opacity={0.8}
                  >
                    {value}
                  </text>
                </g>
              )}
            />
          </ResponsiveContainer>
        </div>

        {/* Stacked Area Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={stackedAreaData}>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
              <XAxis dataKey="month" stroke={foregroundColor} />
              <YAxis stroke={foregroundColor} />
              <Tooltip
                contentStyle={{ backgroundColor: theme.colors.card.value, borderColor: borderColor }}
                labelStyle={{ color: foregroundColor }}
                itemStyle={{ color: foregroundColor }}
              />
              <Legend wrapperStyle={{ color: foregroundColor }} />
              <Area type="monotone" dataKey="mobile" stackId="1" stroke={primaryColor} fill={primaryColor} fillOpacity={0.8} />
              <Area type="monotone" dataKey="desktop" stackId="1" stroke={secondaryColor} fill={secondaryColor} fillOpacity={0.8} />
              <Area type="monotone" dataKey="tablet" stackId="1" stroke={accentColor} fill={accentColor} fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={100}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: theme.colors.card.value, borderColor: borderColor }}
                labelStyle={{ color: foregroundColor }}
                itemStyle={{ color: foregroundColor }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <div className="text-2xl font-bold text-primary">$2.4M</div>
            <div className="text-sm text-muted-foreground">Total Revenue</div>
          </div>
        </div>

        {/* Waterfall Chart (Custom Implementation) */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Financial Waterfall</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={waterfallData}>
              <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
              <XAxis dataKey="name" stroke={foregroundColor} />
              <YAxis stroke={foregroundColor} />
              <Tooltip
                contentStyle={{ backgroundColor: theme.colors.card.value, borderColor: borderColor }}
                labelStyle={{ color: foregroundColor }}
                itemStyle={{ color: foregroundColor }}
              />
              <Bar dataKey="value" fill={primaryColor}>
                {waterfallData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.fill === 'primary' ? primaryColor :
                      entry.fill === 'accent' ? accentColor :
                      entry.fill === 'destructive' ? destructiveColor :
                      primaryColor
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gauge Chart */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Performance Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={gaugeData}>
              <RadialBar
                minAngle={15}
                background
                clockWise
                dataKey="value"
                cornerRadius={10}
                fill={primaryColor}
              />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                <tspan x="50%" dy="-10" fontSize="36" fontWeight="bold" fill={foregroundColor}>
                  75%
                </tspan>
                <tspan x="50%" dy="30" fontSize="16" fill={mutedColor}>
                  Performance
                </tspan>
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Sankey Diagram (Custom Flow Visualization) */}
        <div className="bg-card p-4 rounded-lg border col-span-full">
          <h3 className="text-lg font-semibold mb-4">User Journey Flow</h3>
          <div className="w-full py-4" style={{ minHeight: '300px' }}>
            <div className="flex justify-between items-center px-8">
              {sankeyData.nodes.map((node, index) => (
                <div key={index} className="text-center">
                  <div
                    className="px-4 py-2 rounded-lg font-semibold"
                    style={{
                      backgroundColor: chartColors[index % chartColors.length],
                      color: '#ffffff'
                    }}
                  >
                    {node.name}
                  </div>
                  {index < sankeyData.nodes.length - 1 && (
                    <div className="mt-4">
                      <svg width="100" height="2" className="mx-auto">
                        <line
                          x1="0"
                          y1="1"
                          x2="100"
                          y2="1"
                          stroke={mutedColor}
                          strokeWidth="2"
                          markerEnd="url(#arrowhead)"
                        />
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill={mutedColor} />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8 text-sm text-muted-foreground">
              Flow visualization showing user journey through conversion stages
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}