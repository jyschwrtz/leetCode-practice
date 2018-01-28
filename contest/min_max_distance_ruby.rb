# @param {Integer[]} stations
# @param {Integer} k
# @return {Float}
def minmax_gas_dist(stations, k)
  arr = [];
  prc = Proc.new { |a, b| a[0] <=> b[0] }

  stations.each.with_index do |station, idx|
    break if idx == stations.length - 1
    temp = stations[idx + 1] - stations[idx]
    if arr.length < k + 1
      arr.push([temp, idx])
      arr.sort!(&prc)
    elsif arr[0][0] < temp
      arr[0] = [temp, idx]
      arr.sort!(&prc)
    end
  end

  reduced = Hash.new(0)
  k.times do
    largest = arr[-1]
    idx = largest[1]
    count = reduced[idx]
    if count > 0
      arr[-1] = [(largest[0] * (count + 1)).to_f / (count + 2), largest[1]]
      reduced[idx] += 1
    else
      reduced[idx] += 1
      arr[-1] = [largest[0].to_f / 2, largest[1]]
    end
    arr.sort!(&prc)
  end

  arr[-1][0]
end


# puts minmax_gas_dist([23,24,36,39,46,56,57,65,84,98], 1)
## 14

# puts minmax_gas_dist([10,19,25,27,56,63,70,87,96,97], 3)
## 9.66

puts minmax_gas_dist([12,17,54,66,77,83,88,92,97,99], 6)
## 7.40000
