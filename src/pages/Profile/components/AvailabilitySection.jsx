import { Clock, CheckCircle2, Calendar, MessageSquare } from 'lucide-react';

export function AvailabilitySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Availability Status</h2>
              <p className="text-purple-100 mb-4">
                Ready to bring your project to life with professional voice work
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Available for New Projects</h3>
                    <p className="text-sm text-purple-100">
                      Currently accepting new dubbing and voice-over projects
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MessageSquare className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Quick Response Time</h3>
                    <p className="text-sm text-purple-100">
                      Typically responds within 1 hour during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Calendar className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Booking Schedule</h3>
                    <p className="text-sm text-purple-100">
                      Next available slot: March 12, 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Working Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Working Hours</h3>
              </div>

              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM IST' },
                  { day: 'Saturday', hours: '10:00 AM - 6:00 PM IST' },
                  { day: 'Sunday', hours: 'By Appointment Only' },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-white/20 last:border-0"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-purple-100">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <p className="text-sm text-center">
                  <span className="font-semibold">Need urgent delivery?</span> Express service available for time-sensitive projects
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-purple-100">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24h</div>
              <div className="text-sm text-purple-100">Avg. Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">350+</div>
              <div className="text-sm text-purple-100">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-purple-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
