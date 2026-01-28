from behave import given

@given("I print hello")
def step_print(context):
    print("Hello from Behave!")