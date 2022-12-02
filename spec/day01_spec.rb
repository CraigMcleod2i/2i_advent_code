require './submissions/day01.rb'

describe 'Countdown to Christmas' do
    context 'The Count down to Christmas method should count down the days until Christmas' do
        it 'Should announce how many days until Christmas' do
            time = Time.now
            today = time.day
            expect(countdown_to_christmas(today)).to eq("There are #{CHRISTMAS - today} days till Christmas!!")
        end

        it 'Should announce that it is Christmas day if the days counter matches 24' do
            today = 24
            expect(countdown_to_christmas(today)).to eq("It's Christmas dayyyyyy, get that Turkey in the oven!!")
        end
    end
end