class MyCalendarThree
    def initialize()
        @bookings = Hash.new(0)
        @overlap = 0
    end


=begin
    :type start: Integer
    :type end: Integer
    :rtype: Integer
=end
    def book(start_time, end_time)
        @bookings[start_time] += 1
        @bookings[end_time] -= 1
        temp = 0
        @bookings.keys.sort.each do |key|
            temp += @bookings[key]
            @overlap = temp if temp > @overlap
        end

        @overlap
    end


end

# Your MyCalendarThree object will be instantiated and called as such:
# obj = MyCalendarThree.new()
# param_1 = obj.book(start, end)
#
# {
#   5: 2,
#   10: 1,
#   15: -1,
#   20: -1,
#   25: 1,
#   40: -1,
#   50: 1,
#   55: -1,
#   60: -1,
# }
