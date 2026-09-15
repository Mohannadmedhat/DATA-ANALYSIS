import json
import re

with open('src/data/slidesData.ts', encoding='utf-8') as f:
    code = f.read()

# Let's inspect some specific slides where differences might occur
# E.g. Slide 3: 
# PDF Slide 3 has: Better Decision Making, Understanding Customers, Finding Opportunities, Improving Performance, Predicting Trends (5 cards)
# PDF Slide 4 has: Business, Healthcare, Technology, Social Media (4 cards)
# PDF Slide 5: Data vs Information vs Insight (Data: Unprocessed facts / Raw sales numbers, Information: Data organized / Monthly sales report, Insight: The "why" / Sales increased due to marketing campaign)
# PDF Slide 6: Qualitative Data (Describes qualities or categories / Country, Gender, Category) vs Quantitative Data (Describes measurable quantities / Salary, Age, Revenue)
# PDF Slide 7: Structured (SQL Tables, Excel Files), Semi-Structured (JSON, XML), Unstructured (Images, Videos, Emails)
# PDF Slide 8: 1 Collect, 2 Clean, 3 Explore, 4 Analyze, 5 Visualize, 6 Communicate
# PDF Slide 9: Data Sources -> Extract -> Transform -> Load -> Database -> Analysis -> Dashboard -> Decision
# PDF Slide 10: 1 Math & Stats, 2 Excel, 3 Python Fund, 4 Python for DA, 5 SQL, 6 Power BI, 7 Tableau, 8 Web Scraping
# PDF Slide 11: Section 01 - Excel for Data Analysis
# PDF Slide 12: Data Entry & Org, Formulas & Functions, Data Cleaning, Pivot Tables, Charts, Dashboards
# PDF Slide 13: SUM, AVERAGE, IF, XLOOKUP + Pivot Tables banner
# PDF Slide 14: Clean Data -> Build Pivot Table -> Add Charts -> Assemble Dashboard + Best Practices (4 items)
# PDF Slide 15: Section 02 - Python Fundamentals
# PDF Slide 16: Core Building Blocks + Python code
# PDF Slide 17: Conditions & Loops
# PDF Slide 18: Functions, Lists & Dictionaries + Python code
# PDF Slide 19: Section 03 - Python for Data Analysis
# PDF Slide 20: NumPy & Pandas
# PDF Slide 21: Matplotlib & Seaborn
# PDF Slide 22: Reading Datasets -> Data Cleaning -> Data Transformation -> Exploratory Data Analysis + Python code
# PDF Slide 23: Section 04 - SQL & Databases
# PDF Slide 24: Database Concepts, Tables, Relationships
# PDF Slide 25: Filtering Basics + SQL code
# PDF Slide 26: Aggregation Functions + SQL code
# PDF Slide 27: Subqueries code + SQL Server & MySQL
# PDF Slide 28: Section 05 - Power BI
# PDF Slide 29: Power Query, Data Modeling, Relationships
# PDF Slide 30: What DAX Does + DAX code
# PDF Slide 31: Data -> Model -> Dashboard -> Decision + Reports & Publishing
# PDF Slide 32: Section 06 - Tableau
# PDF Slide 33: Connecting Data Sources, Creating Charts
# PDF Slide 34: Interactive Dashboards, Storytelling with Data
# PDF Slide 35: Power BI vs Tableau
# PDF Slide 36: Section 07 - Web Scraping
# PDF Slide 37: HTML Structure, Requests, BeautifulSoup, APIs
# PDF Slide 38: Collecting Product Prices, Market Analysis, Data Collection Automation
# PDF Slide 39: Complete Data Analyst Workflow (Excel, Python, SQL, Power BI, Tableau, Insights)
# PDF Slide 40: Technical Skills vs Soft Skills
# PDF Slide 41: 6 cards summary
# PDF Slide 42: 6 questions
# PDF Slide 43: Mini Research Task (Amazon, Netflix, Uber + 4 questions)
# PDF Slide 44: THANK YOU

print("Inspection completed.")
