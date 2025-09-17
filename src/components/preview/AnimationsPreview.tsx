import { useThemeStore } from '@/store/themeStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Loader2, RefreshCw, Clock, Search, Download, Upload, CheckCircle2, XCircle, AlertCircle, ArrowRight, Heart, Star, Send, Wifi, Zap, Package, Shield, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function AnimationsPreview() {
  const theme = useThemeStore((state) => state.theme)
  const [progress, setProgress] = useState(0)
  const [skeletonLoading, setSkeletonLoading] = useState(true)

  // Progress bar animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 2
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  // Skeleton loading toggle
  useEffect(() => {
    const timer = setInterval(() => {
      setSkeletonLoading((prev) => !prev)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8">
      {/* Loading Spinners */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Loading Spinners & Indicators</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Basic Spinner */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Basic Spinner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            </CardContent>
          </Card>

          {/* Pulsing Dots */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Pulsing Dots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center gap-1 py-4">
                <style>{`
                  @keyframes bounce1 {
                    0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
                    40% { transform: scale(1); opacity: 1; }
                  }
                  @keyframes bounce2 {
                    0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
                    40% { transform: scale(1); opacity: 1; }
                  }
                  @keyframes bounce3 {
                    0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
                    40% { transform: scale(1); opacity: 1; }
                  }
                  .dot1 { animation: bounce1 1.4s infinite ease-in-out; }
                  .dot2 { animation: bounce2 1.4s infinite ease-in-out 0.16s; }
                  .dot3 { animation: bounce3 1.4s infinite ease-in-out 0.32s; }
                `}</style>
                <div className="dot1 w-3 h-3 bg-primary rounded-full" />
                <div className="dot2 w-3 h-3 bg-primary rounded-full" />
                <div className="dot3 w-3 h-3 bg-primary rounded-full" />
              </div>
            </CardContent>
          </Card>

          {/* Rotating Icon */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Rotating Icon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <RefreshCw className="h-8 w-8 animate-spin text-accent" />
              </div>
            </CardContent>
          </Card>

          {/* Pulse Animation */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Pulse Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  <div className="relative w-8 h-8 bg-primary rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loading Bar */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Loading Bar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 py-2">
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground">{progress}%</p>
              </div>
            </CardContent>
          </Card>

          {/* Searching Animation */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Searching</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center gap-2 py-4">
                <Search className="h-5 w-5 animate-pulse text-primary" />
                <span className="text-sm animate-pulse">Searching...</span>
              </div>
            </CardContent>
          </Card>

          {/* Download Progress */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Download</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center gap-2 py-4">
                <Download className="h-5 w-5 animate-bounce text-accent" />
                <span className="text-sm">Downloading...</span>
              </div>
            </CardContent>
          </Card>

          {/* Upload Animation */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center gap-2 py-4">
                <style>{`
                  @keyframes slideUp {
                    0% { transform: translateY(4px); opacity: 0.7; }
                    50% { transform: translateY(-4px); opacity: 1; }
                    100% { transform: translateY(4px); opacity: 0.7; }
                  }
                  .upload-anim { animation: slideUp 1.5s infinite ease-in-out; }
                `}</style>
                <Upload className="h-5 w-5 upload-anim text-primary" />
                <span className="text-sm">Uploading...</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Status Animations */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Status Animations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Success Animation */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Success</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <style>{`
                  @keyframes checkmark {
                    0% { transform: scale(0) rotate(45deg); opacity: 0; }
                    50% { transform: scale(1.2) rotate(45deg); opacity: 1; }
                    100% { transform: scale(1) rotate(45deg); opacity: 1; }
                  }
                  .check-anim { animation: checkmark 0.6s ease-out forwards; }
                `}</style>
                <CheckCircle2 className="h-12 w-12 text-primary check-anim" />
              </div>
            </CardContent>
          </Card>

          {/* Error Animation */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Error</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <style>{`
                  @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
                    20%, 40%, 60%, 80% { transform: translateX(4px); }
                  }
                  .shake-anim { animation: shake 0.6s ease-in-out; }
                `}</style>
                <XCircle className="h-12 w-12 text-destructive shake-anim" />
              </div>
            </CardContent>
          </Card>

          {/* Warning Pulse */}
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Warning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <AlertCircle className="h-12 w-12 text-accent animate-pulse" />
              </div>
            </CardContent>
          </Card>

          {/* Processing */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <Clock className="h-12 w-12 text-secondary animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Skeleton Loading */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Skeleton Loading States</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Card Loading</CardTitle>
            </CardHeader>
            <CardContent>
              {skeletonLoading ? (
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                  <div className="flex gap-2 mt-4">
                    <div className="h-8 bg-muted rounded w-20" />
                    <div className="h-8 bg-muted rounded w-20" />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm">Content loaded successfully!</p>
                  <p className="text-sm text-muted-foreground">This is the actual content that appears after loading.</p>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">Action</Button>
                    <Button size="sm" variant="outline">Cancel</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* List Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">List Loading</CardTitle>
            </CardHeader>
            <CardContent>
              {skeletonLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 animate-pulse">
                      <div className="w-10 h-10 bg-muted rounded-full" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-muted rounded w-1/2" />
                        <div className="h-3 bg-muted rounded w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {[
                    { icon: Star, name: 'Featured Item', desc: 'Most popular choice' },
                    { icon: Zap, name: 'Fast Delivery', desc: 'Ships within 24 hours' },
                    { icon: Shield, name: 'Secure Payment', desc: 'Protected transaction' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Interactive Animations */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Animations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Hover Scale */}
          <Card className="transition-transform hover:scale-105 cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Hover Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-center text-muted-foreground">Hover to scale</p>
            </CardContent>
          </Card>

          {/* Hover Rotate */}
          <Card className="cursor-pointer group">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Hover Rotate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <RefreshCw className="h-8 w-8 text-accent transition-transform group-hover:rotate-180 duration-500" />
              </div>
              <p className="text-xs text-center text-muted-foreground">Hover to rotate</p>
            </CardContent>
          </Card>

          {/* Hover Slide */}
          <Card className="cursor-pointer overflow-hidden group">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Hover Slide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4 relative">
                <ArrowRight className="h-8 w-8 text-primary transition-transform group-hover:translate-x-2" />
              </div>
              <p className="text-xs text-center text-muted-foreground">Hover to slide</p>
            </CardContent>
          </Card>

          {/* Hover Bounce */}
          <Card className="cursor-pointer group">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Hover Bounce</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <Heart className="h-8 w-8 text-destructive group-hover:animate-bounce" />
              </div>
              <p className="text-xs text-center text-muted-foreground">Hover to bounce</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Button Loading States */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Button Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing
          </Button>

          <Button variant="secondary" disabled>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Updating
          </Button>

          <Button variant="outline" disabled>
            <Clock className="mr-2 h-4 w-4 animate-pulse" />
            Please wait
          </Button>

          <Button className="gap-2">
            <Send className="h-4 w-4" />
            Send Message
            <style>{`
              @keyframes send {
                0% { transform: translateX(0) translateY(0); }
                50% { transform: translateX(4px) translateY(-4px); }
                100% { transform: translateX(0) translateY(0); }
              }
              button:hover .send-icon { animation: send 0.6s ease-in-out; }
            `}</style>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Notification Animations */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Notification Animations</h3>
        <div className="space-y-4">
          {/* Slide In Notification */}
          <Card className="border-primary/20 bg-primary/5">
            <style>{`
              @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
              .slide-in { animation: slideIn 0.5s ease-out; }
            `}</style>
            <CardContent className="slide-in pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Success!</p>
                  <p className="text-xs text-muted-foreground">Your changes have been saved</p>
                </div>
                <Button size="sm" variant="ghost">Dismiss</Button>
              </div>
            </CardContent>
          </Card>

          {/* Fade In Notification */}
          <Card className="border-accent/20 bg-accent/5">
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .fade-in { animation: fadeIn 0.8s ease-out; }
            `}</style>
            <CardContent className="fade-in pt-6">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-accent" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Warning</p>
                  <p className="text-xs text-muted-foreground">Please review before proceeding</p>
                </div>
                <Button size="sm" variant="ghost">Review</Button>
              </div>
            </CardContent>
          </Card>

          {/* Pop Up Notification */}
          <Card className="border-destructive/20 bg-destructive/5">
            <style>{`
              @keyframes popUp {
                0% { transform: scale(0.8); opacity: 0; }
                80% { transform: scale(1.05); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
              }
              .pop-up { animation: popUp 0.4s ease-out; }
            `}</style>
            <CardContent className="pop-up pt-6">
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Error occurred</p>
                  <p className="text-xs text-muted-foreground">Something went wrong. Please try again.</p>
                </div>
                <Button size="sm" variant="ghost">Retry</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Connection Status */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Connection Status Indicators</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Online Status */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Online</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  <div className="relative w-2 h-2 bg-primary rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connecting Status */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-accent animate-pulse" />
                  <span className="text-sm font-medium animate-pulse">Connecting...</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Offline Status */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-muted-foreground line-through" />
                  <span className="text-sm font-medium text-muted-foreground">Offline</span>
                </div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Data Processing Animations */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Data Processing States</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Processing Data */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Processing Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <RefreshCw className="h-5 w-5 text-primary animate-spin" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Analyzing dataset...</p>
                    <div className="mt-2 w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{
                          width: `${progress}%`,
                          animation: 'none'
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{progress}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Process */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Process Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Analysis complete!</p>
                    <p className="text-xs text-muted-foreground">2,543 records processed successfully</p>
                  </div>
                  <Badge variant="secondary" className="animate-pulse">Done</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">View Results</Button>
                  <Button size="sm" variant="outline">Export</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Transition Examples */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Smooth Transitions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Color Transition */}
          <Card className="cursor-pointer group">
            <CardContent className="pt-6">
              <div className="h-24 bg-primary rounded-lg transition-all duration-500 group-hover:bg-accent flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">Hover for color</span>
              </div>
            </CardContent>
          </Card>

          {/* Shadow Transition */}
          <Card className="cursor-pointer transition-shadow duration-300 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="h-24 bg-card rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium">Hover for shadow</span>
              </div>
            </CardContent>
          </Card>

          {/* Border Transition */}
          <Card className="cursor-pointer border-2 transition-colors duration-300 hover:border-primary">
            <CardContent className="pt-6">
              <div className="h-24 bg-card rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium">Hover for border</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
