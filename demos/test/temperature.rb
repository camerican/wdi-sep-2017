class Temperature
  def self.c_to_f temperature
    (temperature * 9.0) / 5.0 + 32
  end

  def self.f_to_c temperature
    (temperature - 32) * 5.0 / 9.0
  end
end